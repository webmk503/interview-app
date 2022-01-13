import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import { AgeStep, EmailStep, SummaryStep, NamesStep } from './steps'
import { BuyflowProps, EStep, IStepsValues } from './types'
import {
  PRODUCT_IDS_TO_NAMES,
  PRODUCT_IDS_TO_STEPS,
  VALIDATORS_BY_STEP,
} from './constants'

export const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { productId } = props
  const buyflowSteps = PRODUCT_IDS_TO_STEPS[productId]
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setStep] = useState<string>(buyflowSteps[0])
  const [collectedData, updateData] = useState<IStepsValues>({
    email: '',
    age: 0,
    firstName: '',
    lastName: '',
  })

  const handleValueChanged = (field: EStep, value: any) => {
    const errMessage = VALIDATORS_BY_STEP[field](value)
    setError(errMessage || null)
    updateData({ ...collectedData, [field]: value })
  }

  const getStepCallback = (nextStep: EStep) => () => {
    if (!error) {
      setStep(nextStep)
      setError(null)
    }
  }

  const debouncedHandleChange = debounce(handleValueChanged, 300)

  const getStep = () => {
    const callbackFnParam = buyflowSteps.includes(EStep.Names)
      ? EStep.Names
      : EStep.Summary

    switch (currentStep) {
      case EStep.Email:
        return (
          <EmailStep
            onChange={debouncedHandleChange}
            onSubmit={getStepCallback(EStep.Age)}
            disabled={!!error}
          />
        )
      case EStep.Age:
        return (
          <AgeStep
            onChange={debouncedHandleChange}
            onSubmit={getStepCallback(callbackFnParam)}
            disabled={!!error}
          />
        )
      case EStep.Names:
        return (
          <NamesStep
            onChange={debouncedHandleChange}
            onSubmit={getStepCallback(EStep.Summary)}
            disabled={!!error}
          />
        )
      default:
        return <SummaryStep collectedData={collectedData} type={productId} />
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {getStep()}
      {!!error && <div className="error">{error}</div>}
    </>
  )
}
