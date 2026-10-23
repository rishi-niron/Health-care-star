import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page5 from './Page5.jsx'

describe('Page5', () => {
  it('renders its heading', () => {
    render(<Page5 />)
    expect(screen.getByText('Page5')).toBeTruthy()
  })
})
