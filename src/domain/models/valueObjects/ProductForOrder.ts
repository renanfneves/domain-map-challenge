import { ProductSimplified } from './ProductSimplified'

export class ProductForOrder extends ProductSimplified {
  constructor(
    id: string,
    name: string,
    readonly price: number,
    readonly quantity: number,
  ) {
    if (quantity <= 0) throw new Error('Quantity can not be 0 or negative')
    if (price <= 0) throw new Error('Price can not be 0 or negative')
    super(id, name)
  }
}
