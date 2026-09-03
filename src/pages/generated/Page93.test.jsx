import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page93 from './Page93.jsx'

describe('Page93', () => {
  it('renders its heading', () => {
    render(<Page93 />)
    expect(screen.getByText('Page93')).toBeTruthy()
  })
})
