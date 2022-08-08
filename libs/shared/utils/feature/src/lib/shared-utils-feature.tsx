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

export function cleanObject(obj: Record<string, unknown>) {
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

        // Return value only for select fields
        if (k.includes('Id')) {
          return [k, (v as any)?.['value']]
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
