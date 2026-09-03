import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page3 from './Page3.jsx'

describe('Page3', () => {
  it('renders its heading', () => {
    render(<Page3 />)
    expect(screen.getByText('Page3')).toBeTruthy()
  })
})
