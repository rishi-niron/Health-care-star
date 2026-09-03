import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page83 from './Page83.jsx'

describe('Page83', () => {
  it('renders its heading', () => {
    render(<Page83 />)
    expect(screen.getByText('Page83')).toBeTruthy()
  })
})
