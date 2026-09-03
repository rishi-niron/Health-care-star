import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page86 from './Page86.jsx'

describe('Page86', () => {
  it('renders its heading', () => {
    render(<Page86 />)
    expect(screen.getByText('Page86')).toBeTruthy()
  })
})
