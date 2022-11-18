export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }
    else if (type === []) {
      return stringArrayOrObject === ''
  }

  return false
}
