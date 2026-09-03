import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page26 from './Page26.jsx'

describe('Page26', () => {
  it('renders its heading', () => {
    render(<Page26 />)
    expect(screen.getByText('Page26')).toBeTruthy()
  })
})
