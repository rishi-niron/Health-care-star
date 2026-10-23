import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page60 from './Page60.jsx'

describe('Page60', () => {
  it('renders its heading', () => {
    render(<Page60 />)
    expect(screen.getByText('Page60')).toBeTruthy()
  })
})
