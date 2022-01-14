import React, { ChangeEvent, useState } from 'react'
import { EStep } from '../types'
import { VALIDATORS_BY_STEP } from '../constants'

interface AgeStepProps {
  onChange: (field: EStep, value: number) => void
  onSubmit(): void
  disabled: boolean
}

export const AgeStep: React.FC<AgeStepProps> = (props) => {
  const { onSubmit, onChange, disabled } = props
  const [age, setAge] = useState(0)
  const isNextDisabled = VALIDATORS_BY_STEP[EStep.Age](age) || disabled

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(value))
    onChange(EStep.Age, Number(value))
  }
  return (
    <>
      <label>
        Age: <input type="number" onChange={handleChange} value={age} min={0} />
      </label>
      <button onClick={onSubmit} disabled={isNextDisabled}>
        Next
      </button>
    </>
  )
}
