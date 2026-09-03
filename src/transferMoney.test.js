import { describe, it, expect } from 'vitest'
import { transferMoney } from './broken.js'

describe('transferMoney', () => {
  it('rejects a zero amount', () => {
    const sender = { balance: 100 }
    const receiver = { balance: 0 }
    expect(transferMoney(sender, receiver, 0)).toBe(false)
  })

  it('rejects a negative amount', () => {
    const sender = { balance: 100 }
    const receiver = { balance: 0 }
    expect(transferMoney(sender, receiver, -10)).toBe(false)
  })

  it('rejects a transfer larger than the sender balance', () => {
    const sender = { balance: 50 }
    const receiver = { balance: 0 }
    expect(transferMoney(sender, receiver, 100)).toBe(false)
    expect(sender.balance).toBe(50)
    expect(receiver.balance).toBe(0)
  })

  it('moves funds from sender to receiver on success', () => {
    const sender = { balance: 100 }
    const receiver = { balance: 0 }
    expect(transferMoney(sender, receiver, 40)).toBe(true)
    expect(sender.balance).toBe(60)
    expect(receiver.balance).toBe(40)
  })
})
