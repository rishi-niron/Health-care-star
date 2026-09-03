import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page8 from './Page8.jsx'

describe('Page8', () => {
  it('renders its heading', () => {
    render(<Page8 />)
    expect(screen.getByText('Page8')).toBeTruthy()
  })
})
