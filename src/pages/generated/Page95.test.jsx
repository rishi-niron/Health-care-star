import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page95 from './Page95.jsx'

describe('Page95', () => {
  it('renders its heading', () => {
    render(<Page95 />)
    expect(screen.getByText('Page95')).toBeTruthy()
  })
})
