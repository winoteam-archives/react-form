import { createValidationRule } from './../'

describe('createValidationRule', () => {
  it('returns string', () => {
    const rule = value => value !== 'Léo'
    expect(createValidationRule(rule, 'This works !')('Léo')).toBe(
      'This works !',
    )
  })

  it('returns undefined', () => {
    const rule = value => value === 'Léo'
    expect(createValidationRule(rule, 'This works !')('Léo')).toBe(undefined)
  })
})
