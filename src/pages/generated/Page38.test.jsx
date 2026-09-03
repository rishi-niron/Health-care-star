import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page38 from './Page38.jsx'

describe('Page38', () => {
  it('renders its heading', () => {
    render(<Page38 />)
    expect(screen.getByText('Page38')).toBeTruthy()
  })
})
