import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page11 from './Page11.jsx'

describe('Page11', () => {
  it('renders its heading', () => {
    render(<Page11 />)
    expect(screen.getByText('Page11')).toBeTruthy()
  })
})
