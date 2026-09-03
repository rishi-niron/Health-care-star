import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page4 from './Page4.jsx'

describe('Page4', () => {
  it('renders its heading', () => {
    render(<Page4 />)
    expect(screen.getByText('Page4')).toBeTruthy()
  })
})
