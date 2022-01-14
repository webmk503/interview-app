import { max } from '../max'

describe('email validator', () => {
  test('should return default err message if incorrect value passed', () => {
    expect(max(100)(101)).toBe('Maximum is 100')
  })
  test('should return custom err message if incorrect value passed', () => {
    expect(max(100, 'Custom max message')(101)).toBe('Custom max message')
  })
  test('should return false if correct value passed', () => {
    expect(max(100)(25)).toBeFalsy()
  })
})
