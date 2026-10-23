import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page6 from './Page6.jsx'

describe('Page6', () => {
  it('renders its heading', () => {
    render(<Page6 />)
    expect(screen.getByText('Page6')).toBeTruthy()
  })
})
