import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page40 from './Page40.jsx'

describe('Page40', () => {
  it('renders its heading', () => {
    render(<Page40 />)
    expect(screen.getByText('Page40')).toBeTruthy()
  })
})
