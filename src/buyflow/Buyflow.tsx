import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import NamesStep from './NamesStep'
import {
  BuyflowProps,
  EStep,
  IStepsValues,
  ProductIds,
  StringObject,
} from './types'
import { validateField } from './helpers'

const PRODUCT_IDS_TO_NAMES: StringObject<string> = {
  [ProductIds.DevIns]: 'Developer Insurance',
  [ProductIds.DesignerIns]: 'Designer Insurance',
}

const STEP_ERROR: StringObject<string> = {
  [EStep.Email]: 'Enter correct email',
  [EStep.Age]: 'Enter correct age',
  [EStep.Names]: 'Enter you first and last name',
}

const PRODUCT_IDS_TO_STEPS: StringObject<string[]> = {
  [ProductIds.DevIns]: [EStep.Email, EStep.Age, EStep.Summary],
  [ProductIds.DesignerIns]: [
    EStep.Email,
    EStep.Age,
    EStep.Names,
    EStep.Summary,
  ],
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { productId } = props
  const buyflowSteps = PRODUCT_IDS_TO_STEPS[productId]
  const [error, setError] = useState<string>('')
  const [currentStep, setStep] = useState<string>(buyflowSteps[0])
  const [collectedData, updateData] = useState<IStepsValues>({
    email: '',
    age: 0,
    names: '',
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    const isValidValue = validateField(field, value)
    setError(isValidValue ? '' : field)

    if (isValidValue) {
      updateData({ ...collectedData, [field]: value })
      setStep(nextStep)
    }
  }

  const getStep = () => {
    const callbackFnParam = buyflowSteps.includes(EStep.Names)
      ? EStep.Names
      : EStep.Summary

    switch (currentStep) {
      case EStep.Email:
        return <EmailStep cb={getStepCallback(EStep.Age)} />
      case EStep.Age:
        return <AgeStep cb={getStepCallback(callbackFnParam)} />
      case EStep.Names:
        return <NamesStep cb={getStepCallback(EStep.Summary)} />
      default:
        return <SummaryStep collectedData={collectedData} type={productId} />
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {getStep()}
      {!!error && <div>{STEP_ERROR[error]}</div>}
    </>
  )
}

export default Buyflow
