import { SelectFieldOptions } from '../../../../../web/admin-dashboard/feature/src/lib/web-admin-helper/web-admin-helper'

export function capitalizeFirstLetter(string: string | undefined) {
  return string && string[0].toUpperCase() + string.slice(1)
}

interface SelectReturn {
  value: string
  label: string
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any)
}

export function cleanFormInput(obj: Record<string, unknown>, selectFieldOptions?: SelectFieldOptions[]) {
  // console.log(obj)
  const selectFields = selectFieldOptions?.filter((field) => field.type === 'single').map((field) => field.idName)
  const multiSelectFields = selectFieldOptions?.filter((field) => field.type === 'multi').map((field) => field.name)

  return Object.fromEntries(
    Object.entries(obj)
      // Remove id, __typename, updatedAt, createdAt, and empty fields
      .filter(([k, v]) => {
        if (
          v === undefined ||
          !v ||
          v === '' ||
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

export function cleanDatabaseOutput(obj: Record<string, unknown>, selectFieldOptions?: SelectFieldOptions[]) {
  const selectFields = selectFieldOptions?.filter((field) => field.type === 'single').map((field) => field.name)
  const multiSelectFields = selectFieldOptions?.filter((field) => field.type === 'multi').map((field) => field.name)

  return Object.fromEntries(
    Object.entries(obj)
      // Remove id, __typename, updatedAt, createdAt, and empty fields
      .filter(([k, v]) => {
        if (
          v === undefined ||
          !v ||
          v === '' ||
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
          const field = selectFieldOptions?.find((f) => f.name === k)
          return [k, field?.mapFunction(v as any)]
        }
        // Return value for single select fields
        if (selectFields?.includes(k)) {
          const field = selectFieldOptions?.find((f) => f.name === k)
          return [field?.idName, field?.mapFunction(v as any)]
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
