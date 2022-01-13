import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import NamesStep from '../steps/NamesStep'

describe('helpers', () => {
  const spyCb = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('input renders correct', () => {
    render(<NamesStep cb={spyCb} />)
    const input = screen.getByPlaceholderText('Enter your first and last name')
    expect(input).toBeInTheDocument()
  })

  test('should call cb when clicking Next', () => {
    render(<NamesStep cb={spyCb} />)
    const nextBtn = screen.getByText('Next')
    fireEvent.click(nextBtn)
    expect(spyCb).toHaveBeenCalled()
  })
})
