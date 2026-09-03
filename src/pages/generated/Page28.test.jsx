import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page28 from './Page28.jsx'

describe('Page28', () => {
  it('renders its heading', () => {
    render(<Page28 />)
    expect(screen.getByText('Page28')).toBeTruthy()
  })
})
