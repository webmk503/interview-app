import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('found 2 "Get started" strings', () => {
  render(<App />)
  const linkElements = screen.getAllByText(/Get started/i)
  expect(linkElements).toHaveLength(2)
})
