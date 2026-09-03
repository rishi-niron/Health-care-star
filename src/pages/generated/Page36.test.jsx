import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page36 from './Page36.jsx'

describe('Page36', () => {
  it('renders its heading', () => {
    render(<Page36 />)
    expect(screen.getByText('Page36')).toBeTruthy()
  })
})
