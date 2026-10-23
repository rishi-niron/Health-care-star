import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page7 from './Page7.jsx'

describe('Page7', () => {
  it('renders its heading', () => {
    render(<Page7 />)
    expect(screen.getByText('Page7')).toBeTruthy()
  })
})
