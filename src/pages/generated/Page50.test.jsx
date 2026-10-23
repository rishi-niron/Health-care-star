import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page50 from './Page50.jsx'

describe('Page50', () => {
  it('renders its heading', () => {
    render(<Page50 />)
    expect(screen.getByText('Page50')).toBeTruthy()
  })
})
