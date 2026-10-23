import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page14 from './Page14.jsx'

describe('Page14', () => {
  it('renders its heading', () => {
    render(<Page14 />)
    expect(screen.getByText('Page14')).toBeTruthy()
  })
})
