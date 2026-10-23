import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page98 from './Page98.jsx'

describe('Page98', () => {
  it('renders its heading', () => {
    render(<Page98 />)
    expect(screen.getByText('Page98')).toBeTruthy()
  })
})
