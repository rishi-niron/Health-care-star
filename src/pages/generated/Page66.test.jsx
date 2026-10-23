import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page66 from './Page66.jsx'

describe('Page66', () => {
  it('renders its heading', () => {
    render(<Page66 />)
    expect(screen.getByText('Page66')).toBeTruthy()
  })
})
