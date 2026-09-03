import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page100 from './Page100.jsx'

describe('Page100', () => {
  it('renders its heading', () => {
    render(<Page100 />)
    expect(screen.getByText('Page100')).toBeTruthy()
  })
})
