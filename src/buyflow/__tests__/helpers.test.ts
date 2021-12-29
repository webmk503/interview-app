import { validateField } from '../helpers'

describe('helpers', () => {
  test('should return true for correct email', () => {
    expect(validateField('email', 'email@domain.com')).toBeTruthy()
  })

  test('should return true for wrong age', () => {
    expect(validateField('age', 0)).toBeFalsy()
  })
})
