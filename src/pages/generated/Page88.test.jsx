import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page88 from './Page88.jsx'

describe('Page88', () => {
  it('renders its heading', () => {
    render(<Page88 />)
    expect(screen.getByText('Page88')).toBeTruthy()
  })
})
