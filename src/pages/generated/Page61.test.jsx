import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page61 from './Page61.jsx'

describe('Page61', () => {
  it('renders its heading', () => {
    render(<Page61 />)
    expect(screen.getByText('Page61')).toBeTruthy()
  })
})
