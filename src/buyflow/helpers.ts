import { EStep } from './types'

export const validateField = (field: string, value: string | number) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  if (field === EStep.Email) {
    return regex.test(`${value}`)
  }

  return !!value
}
