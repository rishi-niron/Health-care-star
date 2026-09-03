import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page20 from './Page20.jsx'

describe('Page20', () => {
  it('renders its heading', () => {
    render(<Page20 />)
    expect(screen.getByText('Page20')).toBeTruthy()
  })
})
