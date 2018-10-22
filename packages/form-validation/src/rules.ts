/**
 * Check if a value is defined
 */
export function isRequired(value: any): boolean {
  return (
    value !== '' &&
    value !== undefined &&
    value !== null &&
    !(Array.isArray(value) && !value.length)
  )
}

/**
 * Check if a value is a date
 */
export function isDate(value: any): boolean {
  return new Date(value).toString() !== 'Invalid Date'
}

/**
 * Check if a value is an email
 */
export function isEmail(value: any): boolean {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  )
}

/**
 * Check if a value is an integer
 */
export function isInteger(value: any): boolean {
  return value == parseInt(value, 10)
}

/**
 * Check if a value is included in an array
 */
export function isOneOf(options: any) {
  return (value: any) => {
    return Array.isArray(options) && options.includes(value)
  }
}

export default { isRequired, isDate, isEmail, isInteger, isOneOf }
