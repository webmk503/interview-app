import { EStep, ProductIds } from './types'
import { email } from './validators'
import { min } from './validators/min'
import { max } from './validators/max'
import { notEmpty } from './validators/notEmpty'

export const PRODUCT_IDS_TO_NAMES: Record<ProductIds, string> = {
  [ProductIds.DevIns]: 'Developer Insurance',
  [ProductIds.DesignerIns]: 'Designer Insurance',
}

export const PRODUCT_IDS_TO_STEPS: Record<ProductIds, string[]> = {
  [ProductIds.DevIns]: [EStep.Email, EStep.Age, EStep.Summary],
  [ProductIds.DesignerIns]: [
    EStep.Email,
    EStep.Age,
    EStep.Names,
    EStep.Summary,
  ],
}

export const VALIDATORS_BY_STEP: Record<EStep, Function> = {
  [EStep.Email]: email,
  [EStep.Age]: (value: number, errMessage: string) =>
    min(18, errMessage)(value) || max(99, errMessage)(value),
  [EStep.Names]: () => {},
  [EStep.FirstName]: notEmpty('Enter First Name'),
  [EStep.LastName]: notEmpty('Enter Last Name'),
  [EStep.Summary]: () => {},
}
