import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page96 from './Page96.jsx'

describe('Page96', () => {
  it('renders its heading', () => {
    render(<Page96 />)
    expect(screen.getByText('Page96')).toBeTruthy()
  })
})
