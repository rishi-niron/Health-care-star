import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page32 from './Page32.jsx'

describe('Page32', () => {
  it('renders its heading', () => {
    render(<Page32 />)
    expect(screen.getByText('Page32')).toBeTruthy()
  })
})
