import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page13 from './Page13.jsx'

describe('Page13', () => {
  it('renders its heading', () => {
    render(<Page13 />)
    expect(screen.getByText('Page13')).toBeTruthy()
  })
})
