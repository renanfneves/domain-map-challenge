import { ProductForOrder } from './valueObjects/ProductForOrder'

export class Sale {
  private constructor(
    readonly createdAt: Date,
    readonly products: ProductForOrder[],
    readonly id?: string,
  ) {
    if (!products.length)
      throw new Error('Sales must have at least one product')
  }

  static create(createdAt: Date, products: ProductForOrder[]) {
    return new Sale(createdAt, products)
  }

  static restore(createdAt: Date, products: ProductForOrder[], id: string) {
    return new Sale(createdAt, products, id)
  }

  calculateProfit() {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
