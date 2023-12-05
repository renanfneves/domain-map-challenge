export class Stock {
  constructor(
    private amount: number,
    private minimumLimit: number,
  ) {
    if (amount < 0) throw new Error('Product amount can not be negative')
    if (minimumLimit <= 0)
      throw new Error('Minimum Limit amount can not be 0 or negative')
  }

  takeOffStock(amount: number) {
    if (this.amount === 0) throw new Error('Product Unavailable')
    if (this.amount - amount < 0)
      throw new Error('Amount sold can not be higher than amount in stock')
    this.amount -= amount
  }

  setMinimumLimit(minimumLimit: number) {
    if (minimumLimit <= 0)
      throw new Error('Minimum Limit can not be 0 or negative')
    this.minimumLimit = minimumLimit
  }

  getMinimumLimit() {
    return this.minimumLimit
  }

  isEqualOrUnderMinimumLimit() {
    return this.amount <= this.minimumLimit
  }

  getAmount() {
    return this.amount
  }

  increaseAmount(amount: number) {
    if (amount <= 0) throw new Error('Amount must be higher than 0')
    this.amount += amount
  }
}
