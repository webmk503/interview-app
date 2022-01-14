import { EStep, ProductIds } from './types'
import { email } from './validators'
import { min } from './validators/min'
import { max } from './validators/max'
import { notEmpty } from './validators/notEmpty'
import { AgeStep, EmailStep, NamesStep, SummaryStep } from './steps/'

export const PRODUCT_IDS_TO_NAMES: Record<ProductIds, string> = {
  [ProductIds.DevIns]: 'Developer Insurance',
  [ProductIds.DesignerIns]: 'Designer Insurance',
}

export const STEPS_BY_PRODUCT = {
  [ProductIds.DevIns]: [EmailStep, AgeStep, SummaryStep],
  [ProductIds.DesignerIns]: [EmailStep, AgeStep, NamesStep, SummaryStep],
}

export const VALIDATORS_BY_STEP: Record<EStep, Function> = {
  [EStep.Email]: email,
  [EStep.Age]: (value: number, errMessage: string) =>
    min(18, errMessage)(value) || max(99, errMessage)(value),
  [EStep.FirstName]: notEmpty('Enter First Name'),
  [EStep.LastName]: notEmpty('Enter Last Name'),
  [EStep.Summary]: () => {},
}
