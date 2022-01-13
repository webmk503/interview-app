import React from 'react'
import { render, screen } from '@testing-library/react'
import { AgeStep } from '../AgeStep'

describe('AgeStep component', () => {
  const spySubmit = jest.fn()
  const spyOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('input renders correct', () => {
    render(
      <AgeStep onSubmit={spySubmit} onChange={spyOnChange} disabled={false} />
    )
    const input = screen.getByLabelText('Age:')
    expect(input).toBeInTheDocument()
  })
})
