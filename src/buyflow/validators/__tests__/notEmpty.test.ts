import { notEmpty } from '../notEmpty'

describe('email validator', () => {
  test('should return default err message if empty value passed', () => {
    expect(notEmpty()(null)).toBe('Enter value')
  })
  test('should return custom err message if empty value passed', () => {
    expect(notEmpty('Custom empty message')(0)).toBe('Custom empty message')
  })
  test('should return false if value is not empty', () => {
    expect(notEmpty()(25)).toBeFalsy()
  })
})
