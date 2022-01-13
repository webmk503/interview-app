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
        <div>First Name: {collectedData.firstName}</div>
      )}
      {collectedData.lastName && <div>Last Name: {collectedData.lastName}</div>}
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to={`/purchased=${type}`}>Purchase</Link>
      </div>
    </>
  )
}
