import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page18 from './Page18.jsx'

describe('Page18', () => {
  it('renders its heading', () => {
    render(<Page18 />)
    expect(screen.getByText('Page18')).toBeTruthy()
  })
})
