import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page24 from './Page24.jsx'

describe('Page24', () => {
  it('renders its heading', () => {
    render(<Page24 />)
    expect(screen.getByText('Page24')).toBeTruthy()
  })
})
