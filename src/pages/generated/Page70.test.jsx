import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page70 from './Page70.jsx'

describe('Page70', () => {
  it('renders its heading', () => {
    render(<Page70 />)
    expect(screen.getByText('Page70')).toBeTruthy()
  })
})
