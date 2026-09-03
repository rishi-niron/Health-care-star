import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page9 from './Page9.jsx'

describe('Page9', () => {
  it('renders its heading', () => {
    render(<Page9 />)
    expect(screen.getByText('Page9')).toBeTruthy()
  })
})
