import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page97 from './Page97.jsx'

describe('Page97', () => {
  it('renders its heading', () => {
    render(<Page97 />)
    expect(screen.getByText('Page97')).toBeTruthy()
  })
})
