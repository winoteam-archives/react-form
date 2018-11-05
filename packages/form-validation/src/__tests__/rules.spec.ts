import { isRequired, isDate, isEmail, isInteger, isOneOf } from './../rules'

describe('rules', () => {
  describe('isRequired()', () => {
    it('returns true with a string value', () => {
      const input = 'test'
      expect(isRequired(input)).toBe(true)
    })
    it('returns true with an integer value', () => {
      const input = 1
      expect(isRequired(input)).toBe(true)
    })
    it('returns true with a false value', () => {
      const input = false
      expect(isRequired(input)).toBe(true)
    })
    it('returns true with a true value', () => {
      const input = true
      expect(isRequired(input)).toBe(true)
    })
    it('returns false with an empty array value', () => {
      const input = [] as any
      expect(isRequired(input)).toBe(false)
    })
    it('returns false true an non empty array value', () => {
      const input = ['coucou']
      expect(isRequired(input)).toBe(true)
    })
    it('returns true with an object value', () => {
      const input = {}
      expect(isRequired(input)).toBe(true)
    })
    it('returns false with a null value', () => {
      const input = null
      expect(isRequired(input)).toBe(false)
    })
    it('returns false with an null value', () => {
      const input = undefined
      expect(isRequired(input)).toBe(false)
    })
    it('returns false with an empty string value', () => {
      const input = ''
      expect(isRequired(input)).toBe(false)
    })
  })

  describe('isDate()', () => {
    it('returns false with undefined value', () => {
      const input = undefined
      expect(isDate(input)).toBe(false)
    })
    it('returns true with my date of birth', () => {
      const input = '1996-05-13'
      expect(isDate(input)).toBe(true)
    })
    it('returns false with an invalid date format', () => {
      const input = '13-05-1996'
      expect(isDate(input)).toBe(false)
    })
  })

  describe('isEmail()', () => {
    it('returns false with undefined value', () => {
      const input = undefined
      expect(isEmail(input)).toBe(false)
    })
    it('returns true with my personnal email', () => {
      const input = 'leo.lebrasf@gmail.com'
      expect(isEmail(input)).toBe(true)
    })
    it('returns true with my work email', () => {
      const input = 'leolebras@wino.fr'
      expect(isEmail(input)).toBe(true)
    })
    it('returns false with an invalid email', () => {
      const input = 'test@hello.c'
      expect(isEmail(input)).toBe(false)
    })
  })

  describe('isInteger()', () => {
    it('returns false with undefined value', () => {
      const input = undefined
      expect(isInteger(input)).toBe(false)
    })
    it('returns true with an integer value', () => {
      const input = 10
      expect(isInteger(input)).toBe(true)
    })
    it('returns false with a float value', () => {
      const input = 0.1
      expect(isInteger(input)).toBe(false)
    })
    it('returns true with a string value', () => {
      const input = '20'
      expect(isInteger(input)).toBe(true)
    })
  })

  describe('isOneOf()', () => {
    it('returns false with undefined value', () => {
      const input = undefined
      expect(isOneOf(['foo', 'bar'])(input)).toBe(false)
    })
    it('returns true with correct value', () => {
      const input = 'foo'
      expect(isOneOf(['foo', 'bar'])(input)).toBe(true)
    })
    it('returns false with incorrect value', () => {
      const input = 'yolo'
      expect(isOneOf(['foo', 'bar'])(input)).toBe(false)
    })
  })
})
