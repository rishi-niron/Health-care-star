import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page33 from './Page33.jsx'

describe('Page33', () => {
  it('renders its heading', () => {
    render(<Page33 />)
    expect(screen.getByText('Page33')).toBeTruthy()
  })
})
