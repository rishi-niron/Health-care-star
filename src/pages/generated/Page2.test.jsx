import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page2 from './Page2.jsx'

describe('Page2', () => {
  it('renders its heading', () => {
    render(<Page2 />)
    expect(screen.getByText('Page2')).toBeTruthy()
  })
})
