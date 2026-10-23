import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page21 from './Page21.jsx'

describe('Page21', () => {
  it('renders its heading', () => {
    render(<Page21 />)
    expect(screen.getByText('Page21')).toBeTruthy()
  })
})
