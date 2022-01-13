import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { ProductIds } from '../../types'
import { SummaryStep } from '../SummaryStep'

describe('SummaryStep component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('first name renders correct if DesignerIns selected', () => {
    const collectedData = {
      email: 'k.matveev@gmail.com',
      age: 25,
      firstName: 'Kostya',
      lastName: 'Matveev',
    }
    render(
      <Router>
        <SummaryStep
          collectedData={collectedData}
          type={ProductIds.DesignerIns}
        />
      </Router>
    )
    const firstName = screen.getByTestId('first-name')
    expect(firstName).toBeInTheDocument()
  })
})
