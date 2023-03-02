import { WebUiFormField } from '@biztobiz/web-ui/form'
import { Maybe } from 'graphql/jsutils/Maybe'
import { CorePaging } from '@biztobiz/shared/util-sdk'
import { ForwardRefExoticComponent, SVGProps } from 'react'

export function capitalizeFirstLetter(string: string | undefined) {
  return string && string[0].toUpperCase() + string.slice(1)
}

interface SelectReturn {
  value: string
  label: string
}

export interface NavigationInterface {
  name: string
  href: string
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined }
  >
  current: boolean
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any)
}

function defaultMultiMap(items: { id: string; name?: string }[]): { value: string; label: string }[] {
  return items?.map?.((option: { id: string; name?: string }) => ({
    value: `${option.id}`,
    label: `${option?.name ?? option.id}`,
  }))
}

export function defaultSingleMap(item: { id: string; name?: string }): {
  value: Maybe<string> | undefined
  label: string
} {
  return {
    value: item.id,
    label: `${item?.name ?? item.id}`,
  }
}

export function cleanFormInput(obj: Record<string, unknown>, fields?: WebUiFormField[]) {
  const selectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && !field.options.multi)
    .map((field) => field.key)
  const multiSelectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && field.options.multi)
    .map((field) => field.key)

  return Object.fromEntries(
    Object.entries(obj)
      // Remove id, __typename, updatedAt, createdAt, and empty fields
      .filter(([k, v]) => {
        return !(
          v === undefined ||
          !v ||
          v === '' ||
          (v instanceof Array && !v.length) ||
          k === 'createdAt' ||
          k === 'updatedAt' ||
          k === '__typename' ||
          k === 'id' ||
          (v instanceof Date && !isValidDate(v))
        )
      })
      .map(([k, v]) => {
        // Reformat date strings for storage in database
        if (k.includes('Date') || k.includes('date')) {
          if (typeof v === 'object') {
            return [k, (v as Date).toISOString().split('T')[0]]
          }
          return [k, (v as string).split('T')[0]]
        }
        // Return array of values for multiselect fields
        if (multiSelectFields?.includes(k)) {
          return [k, (v as any)?.map?.((item: any) => ({ id: item?.value }))]
        }
        // Return value only for select fields
        if (selectFields?.includes(k)) {
          return [k, (v as any)?.['value']]
        }
        return [k, v]
      }),
  )
}

export function cleanDatabaseOutput(
  obj: Record<string, unknown>,
  fields?: WebUiFormField[],
  resolverFields?: string[],
) {
  const selectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && !field.options.multi)
    .map((field) => field.key)
  const multiSelectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && field.options.multi)
    .map((field) => field.key)

  return Object.fromEntries(
    Object.entries(obj)
      // Remove id, __typename, updatedAt, createdAt, and empty fields
      .filter(([k, v]) => {
        return !(
          v === undefined ||
          !v ||
          v === '' ||
          (v instanceof Array && !v.length) ||
          k === 'createdAt' ||
          k === 'updatedAt' ||
          k === '__typename' ||
          k === 'id' ||
          (v instanceof Date && !isValidDate(v)) ||
          resolverFields?.includes(k)
        )
      })
      .map(([k, v]) => {
        // Reformat date strings for storage in database
        if (k.includes('Date') || k.includes('date')) {
          if (typeof v === 'object') {
            return [k, (v as Date).toISOString().split('T')[0]]
          }
          return [k, (v as string).split('T')[0]]
        }
        // Return array of values for multiselect fields
        if (multiSelectFields?.includes(k)) {
          const field = fields?.find((f) => f.key === k)
          return [k, field?.options?.mapFunction?.(v as any) ?? defaultMultiMap(v as any)]
        }
        // Return value for single select fields
        if (selectFields?.includes(`${k}Id`)) {
          console.log(k, v)
          const field = fields?.find((f) => f.key.slice(0, -2) === k)
          return [field?.key, field?.options?.mapFunction?.(v as any) ?? defaultSingleMap(v as any)]
        }
        return [k, v]
      }),
  )
}

export function formatDates(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (isNaN(Date.parse(value as string))) {
        return [key, splitDateTime(value as string)]
      }
      return [key, value]
    }),
  )
}

export function splitDateTime(dateTime: string) {
  return dateTime.split('T')[0]
}

export function getDateFromDateTime(yourDate: Date) {
  const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000)
  return yourDate.toISOString().split('T')[0]
}

export function toCount(p: CorePaging | null) {
  if ((p?.take ?? 0) + (p?.skip ?? 0) > (p?.count ?? 0)) return p?.count
  return (p?.take ?? 0) + (p?.skip ?? 0)
}

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
