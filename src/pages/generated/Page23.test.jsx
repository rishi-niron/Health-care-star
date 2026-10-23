import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page23 from './Page23.jsx'

describe('Page23', () => {
  it('renders its heading', () => {
    render(<Page23 />)
    expect(screen.getByText('Page23')).toBeTruthy()
  })
})
