import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page64 from './Page64.jsx'

describe('Page64', () => {
  it('renders its heading', () => {
    render(<Page64 />)
    expect(screen.getByText('Page64')).toBeTruthy()
  })
})
