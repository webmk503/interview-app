import React from 'react'
import { render, screen } from '@testing-library/react'
import { EmailStep } from '../EmailStep'

describe('EmailStep component', () => {
  const spySubmit = jest.fn()
  const spyOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('input renders correct', () => {
    render(
      <EmailStep onSubmit={spySubmit} onChange={spyOnChange} disabled={false} />
    )
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeInTheDocument()
  })
})
