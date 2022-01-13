import React, { useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import { BuyflowProps, EStep, IStepsValues } from './types'
import {
  PRODUCT_IDS_TO_NAMES,
  STEPS_BY_PRODUCT,
  VALIDATORS_BY_STEP,
} from './constants'

export const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { productId } = props
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setStep] = useState<number>(0)
  const [collectedData, updateData] = useState<IStepsValues>({
    email: '',
    age: 0,
    firstName: '',
    lastName: '',
  })

  const StepComponent = useMemo(() => {
    const buyflowSteps = STEPS_BY_PRODUCT[productId]

    return buyflowSteps[currentStep]
  }, [currentStep, productId])

  const handleValueChanged = (field: EStep, value: any) => {
    const errMessage = VALIDATORS_BY_STEP[field](value)
    setError(errMessage || null)
    updateData({ ...collectedData, [field]: value })
  }

  const getStepCallback = () => {
    if (!error) {
      setStep(currentStep + 1)
      setError(null)
    }
  }

  const debouncedHandleChange = debounce(handleValueChanged, 300)

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      <StepComponent
        onChange={debouncedHandleChange}
        onSubmit={getStepCallback}
        disabled={!!error}
        type={productId}
        collectedData={collectedData}
      />
      {!!error && <div className="error">{error}</div>}
    </>
  )
}
