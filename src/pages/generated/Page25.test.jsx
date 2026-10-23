import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page25 from './Page25.jsx'

describe('Page25', () => {
  it('renders its heading', () => {
    render(<Page25 />)
    expect(screen.getByText('Page25')).toBeTruthy()
  })
})
