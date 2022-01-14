import { min } from '../min'

describe('email validator', () => {
  test('should return default err message if incorrect value passed', () => {
    expect(min(18)(10)).toBe('Minimum is 18')
  })
  test('should return custom err message if incorrect value passed', () => {
    expect(min(18, 'Custom min message')(10)).toBe('Custom min message')
  })
  test('should return false if correct value passed', () => {
    expect(min(18)(25)).toBeFalsy()
  })
})
