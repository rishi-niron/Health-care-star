import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page80 from './Page80.jsx'

describe('Page80', () => {
  it('renders its heading', () => {
    render(<Page80 />)
    expect(screen.getByText('Page80')).toBeTruthy()
  })
})
