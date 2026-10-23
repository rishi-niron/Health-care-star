import { describe, it, expect } from 'vitest'
import { authenticate } from './broken.js'

describe('authenticate', () => {
  it('rejects a missing token', () => {
    expect(authenticate(undefined)).toBe(false)
    expect(authenticate('')).toBe(false)
  })

  it('rejects a token that is too short', () => {
    expect(authenticate('abc')).toBe(false)
  })

  it('accepts a token longer than 5 characters', () => {
    expect(authenticate('abcdef')).toBe(true)
  })
})
