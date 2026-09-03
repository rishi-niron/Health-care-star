import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page87 from './Page87.jsx'

describe('Page87', () => {
  it('renders its heading', () => {
    render(<Page87 />)
    expect(screen.getByText('Page87')).toBeTruthy()
  })
})
