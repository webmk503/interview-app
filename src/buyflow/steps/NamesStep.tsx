import React, { ChangeEvent, useMemo, useState } from 'react'
import { EStep } from '../types'
import { VALIDATORS_BY_STEP } from '../constants'

interface NamesStepProps {
  onChange: (field: EStep, value: string) => void
  onSubmit(): void
  disabled: boolean
}

export const NamesStep: React.FC<NamesStepProps> = (props) => {
  const { onSubmit, onChange, disabled } = props
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const isNextDisabled = useMemo(
    () =>
      !!VALIDATORS_BY_STEP[EStep.FirstName](firstName) ||
      !!VALIDATORS_BY_STEP[EStep.LastName](lastName) ||
      disabled,
    [disabled, firstName, lastName]
  )

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setFirstName(value)
    onChange(EStep.FirstName, value)
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setLastName(value)
    onChange(EStep.LastName, value)
  }

  return (
    <>
      <label>
        First Name:{' '}
        <input
          placeholder="Enter your first name"
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </label>
      <label>
        Last Name:{' '}
        <input
          placeholder="Enter your last name"
          onChange={handleLastNameChange}
          value={lastName}
        />
      </label>
      <button onClick={onSubmit} disabled={isNextDisabled}>
        Next
      </button>
    </>
  )
}
