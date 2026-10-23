import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page65 from './Page65.jsx'

describe('Page65', () => {
  it('renders its heading', () => {
    render(<Page65 />)
    expect(screen.getByText('Page65')).toBeTruthy()
  })
})
