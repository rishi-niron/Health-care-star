import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page1 from './Page1.jsx'

describe('Page1', () => {
  it('renders its heading', () => {
    render(<Page1 />)
    expect(screen.getByText('Page1')).toBeTruthy()
  })
})
