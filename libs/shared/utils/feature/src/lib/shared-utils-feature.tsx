import { SVGProps } from 'react'
import { WebUiFormField } from '@biztobiz/web-ui/form'

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
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  current: boolean
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any)
}

function defaultMap(items: { id: string; name?: string }[]): { value: string; label: string }[] {
  return items?.map((option: { id: string; name?: string }) => ({
    value: `${option.id}`,
    label: `${option?.name ?? option.id}`,
  }))
}

export function cleanFormInput(obj: Record<string, unknown>, fields?: WebUiFormField[]) {
  // console.log(obj)
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
        if (
          v === undefined ||
          !v ||
          v === '' ||
          (v instanceof Array && !v.length) ||
          k === 'createdAt' ||
          k === 'updatedAt' ||
          k == '__typename' ||
          k === 'id' ||
          (v instanceof Date && !isValidDate(v))
        )
          return false
        return true
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
          return [k, (v as any)?.map((item: any) => ({ id: item?.value }))]
        }
        // Return value only for select fields
        if (selectFields?.includes(k)) {
          return [k, (v as any)?.['value']]
        }
        return [k, v]
      }),
  )
}

export function cleanDatabaseOutput(obj: Record<string, unknown>, fields?: WebUiFormField[]) {
  const selectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && !field.options.multi)
    .map((field) => field.key)
  const multiSelectFields = fields
    ?.filter((field) => field.type === 'RelationSelect' && field.options.multi)
    .map((field) => field.key)

  console.log(fields)
  return Object.fromEntries(
    Object.entries(obj)
      // Remove id, __typename, updatedAt, createdAt, and empty fields
      .filter(([k, v]) => {
        if (
          v === undefined ||
          !v ||
          v === '' ||
          (v instanceof Array && !v.length) ||
          k === 'createdAt' ||
          k === 'updatedAt' ||
          k == '__typename' ||
          k === 'id' ||
          (v instanceof Date && !isValidDate(v))
        )
          return false
        return true
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
          console.log(k)
          const field = fields?.find((f) => f.key === k)
          console.log(field)
          return [k, field?.options?.mapFunction?.(v as any) ?? defaultMap(v as any)]
        }
        // Return value for single select fields
        if (selectFields?.includes(k)) {
          const field = fields?.find((f) => f.key === k)
          return [field?.key, field?.options?.mapFunction?.(v as any) ?? defaultMap(v as any)]
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
