import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page22 from './Page22.jsx'

describe('Page22', () => {
  it('renders its heading', () => {
    render(<Page22 />)
    expect(screen.getByText('Page22')).toBeTruthy()
  })
})
