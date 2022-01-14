import React, { ChangeEvent, useState } from 'react'
import { EStep } from '../types'
import { VALIDATORS_BY_STEP } from '../constants'

interface EmailStepProps {
  onChange: (field: EStep, value: string) => void
  onSubmit(): void
  disabled: boolean
}

export const EmailStep: React.FC<EmailStepProps> = (props) => {
  const { onSubmit, onChange, disabled } = props
  const [email, setEmail] = useState('')
  const isNextDisabled = VALIDATORS_BY_STEP[EStep.Email](email) || disabled

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value)
    onChange(EStep.Email, value)
  }

  return (
    <>
      <label>
        Email:{' '}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <button onClick={onSubmit} disabled={isNextDisabled}>
        Next
      </button>
    </>
  )
}
