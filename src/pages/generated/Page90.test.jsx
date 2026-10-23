import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page90 from './Page90.jsx'

describe('Page90', () => {
  it('renders its heading', () => {
    render(<Page90 />)
    expect(screen.getByText('Page90')).toBeTruthy()
  })
})
