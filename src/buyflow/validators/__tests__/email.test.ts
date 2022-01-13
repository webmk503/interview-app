import { email } from '../email'

describe('email validator', () => {
  test('should return default err message if incorrect email passed', () => {
    expect(email('testtes.t')).toBe('Enter valid email')
  })
  test('should return custom err message if incorrect email passed', () => {
    expect(email('testtes.t', 'Custom Invalid email message')).toBe(
      'Custom Invalid email message'
    )
  })
  test('should return false if correct email passed', () => {
    expect(email('test@tes.io')).toBeFalsy()
  })
})
