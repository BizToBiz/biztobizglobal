export function capitalizeFirstLetter(string: string | undefined) {
  return string && string[0].toUpperCase() + string.slice(1)
}

export function cleanObject(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) =>
        v !== null &&
        v !== undefined &&
        v !== '' &&
        _ !== 'createdAt' &&
        _ !== 'updatedAt' &&
        _ !== '__typename' &&
        _ !== 'id',
    ),
  )
}

export function getDateFromDateTime(yourDate: Date) {
  const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000)
  return yourDate.toISOString().split('T')[0]
}
