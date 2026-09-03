import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page99 from './Page99.jsx'

describe('Page99', () => {
  it('renders its heading', () => {
    render(<Page99 />)
    expect(screen.getByText('Page99')).toBeTruthy()
  })
})
