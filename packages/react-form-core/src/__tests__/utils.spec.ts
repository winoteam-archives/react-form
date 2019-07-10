import { getFormFieldValue, isFormFieldValueDefined } from './../utils'

describe('getFormFieldValue', () => {
  it('returns string', () => {
    expect(getFormFieldValue('name', { name: 'Léo' })).toBe('Léo')
  })

  it('returns undefined', () => {
    expect(getFormFieldValue('email', { name: 'Léo' })).toBe(undefined)
  })
})

describe('isFormFieldValueDefined', () => {
  it('returns false', () => {
    expect(isFormFieldValueDefined(undefined)).toBe(false)
    expect(isFormFieldValueDefined(null)).toBe(false)
    expect(isFormFieldValueDefined('')).toBe(false)
  })

  it('returns true', () => {
    expect(isFormFieldValueDefined(' ')).toBe(true)
    expect(isFormFieldValueDefined('.')).toBe(true)
    expect(isFormFieldValueDefined('0')).toBe(true)
    expect(isFormFieldValueDefined('a')).toBe(true)
    expect(isFormFieldValueDefined(0)).toBe(true)
  })
})
