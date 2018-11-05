import {
  getFormFieldValue,
  getFormFieldInitialValue,
  getFormFieldError,
  getFormFieldTouched,
  isFormFieldValueDefined,
} from './../utils'

describe('getFormFieldValue', () => {
  it('returns string', () => {
    expect(getFormFieldValue('name', { name: 'Léo' })).toBe('Léo')
  })

  it('returns undefined', () => {
    expect(getFormFieldValue('email', { name: 'Léo' })).toBe(undefined)
  })
})

describe('getFormFieldInitialValue', () => {
  it('returns value', () => {
    expect(getFormFieldInitialValue('name', { name: 'Léo' })).toBe('Léo')
    expect(getFormFieldInitialValue('name', {}, 'Léo')).toBe('Léo')
  })

  it('returns undefined', () => {
    expect(getFormFieldInitialValue('email', { name: 'Léo' })).toBe('')
  })
})

describe('getFormFieldError', () => {
  it('returns string', () => {
    expect(getFormFieldError('name', { name: 'Error !' })).toBe('Error !')
  })

  it('returns null', () => {
    expect(getFormFieldError('name', {})).toBe(undefined)
    expect(getFormFieldError('name', { name: undefined })).toBe(undefined)
  })
})

describe('getFormFieldTouched', () => {
  it('returns true', () => {
    expect(getFormFieldTouched('name', { name: true })).toBe(true)
  })

  it('returns false', () => {
    expect(getFormFieldTouched('name', {})).toBe(false)
    expect(getFormFieldTouched('name', { name: false })).toBe(false)
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
    expect(isFormFieldValueDefined(0)).toBe(true)
  })
})
