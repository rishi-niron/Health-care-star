import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page27 from './Page27.jsx'

describe('Page27', () => {
  it('renders its heading', () => {
    render(<Page27 />)
    expect(screen.getByText('Page27')).toBeTruthy()
  })
})
