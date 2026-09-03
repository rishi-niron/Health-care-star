import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page30 from './Page30.jsx'

describe('Page30', () => {
  it('renders its heading', () => {
    render(<Page30 />)
    expect(screen.getByText('Page30')).toBeTruthy()
  })
})
