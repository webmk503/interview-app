import React from 'react'
import { Link } from 'react-router-dom'
import { IStepsValues, ProductIds } from './types'

interface SummaryStepProps {
  collectedData: IStepsValues
  type: ProductIds
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { collectedData, type } = props

  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      {collectedData.names && <div>Name: {collectedData.names}</div>}
      <div>
        <Link to={`/purchased=${type}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
