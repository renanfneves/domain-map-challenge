import { ProductSimplified } from './ProductSimplified'

export class StockAlert {
  constructor(
    readonly product: ProductSimplified,
    readonly amount: number,
    readonly minimumLimit: number,
  ) {}
}
