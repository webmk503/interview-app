import React from 'react'
import { render, screen } from '@testing-library/react'
import { NamesStep } from '../NamesStep'

describe('NamesStep component', () => {
  const spySubmit = jest.fn()
  const spyOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('input renders correct', () => {
    render(
      <NamesStep onSubmit={spySubmit} onChange={spyOnChange} disabled={false} />
    )
    const input = screen.getByPlaceholderText('Enter your first name')
    expect(input).toBeInTheDocument()
  })

  test('"Next" btn is disabled', () => {
    render(<NamesStep onSubmit={spySubmit} onChange={spyOnChange} disabled />)
    const nextBtn = screen.getByText('Next')
    expect(nextBtn).toBeDisabled()
  })
})
