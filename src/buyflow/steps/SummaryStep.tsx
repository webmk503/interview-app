import React from 'react'
import { Link } from 'react-router-dom'
import { IStepsValues, ProductIds } from '../types'

interface SummaryStepProps {
  collectedData: IStepsValues
  type: ProductIds
}

export const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { collectedData, type } = props

  return (
    <>
      {collectedData.firstName && (
        <div data-testid="first-name">
          First Name: {collectedData.firstName}
        </div>
      )}
      {collectedData.lastName && (
        <div data-testid="last-name">Last Name: {collectedData.lastName}</div>
      )}
      <div data-testid="email">Email: {collectedData.email}</div>
      <div data-testid="age">Age: {collectedData.age}</div>
      <div>
        <Link to={`/purchased=${type}`}>Purchase</Link>
      </div>
    </>
  )
}
