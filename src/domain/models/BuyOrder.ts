import { Supplier } from './Supplier'
import { OrderStatus, OrderStatusFactory } from './valueObjects/OrderStatus'
import { ProductForOrder } from './valueObjects/ProductForOrder'

export class BuyOrder {
  status: OrderStatus

  private constructor(
    readonly createdAt: Date,
    readonly products: ProductForOrder[],
    readonly supplier: Supplier,
    status: string,
    readonly id?: string,
  ) {
    if (!products.length)
      throw new Error('Sales must have at least one product')

    this.status = OrderStatusFactory.create(status, this)
  }

  static create(
    createdAt: Date,
    products: ProductForOrder[],
    supplier: Supplier,
  ) {
    const status = 'in_progress'
    return new BuyOrder(createdAt, products, supplier, status)
  }

  static restore(
    createdAt: Date,
    products: ProductForOrder[],
    supplier: Supplier,
    status: string,
    id: string,
  ) {
    return new BuyOrder(createdAt, products, supplier, status, id)
  }

  setOutdated(): void {
    this.status.setOutdated()
  }

  extendDeadline(): void {
    this.status.extendDeadline()
  }

  finish(): void {
    this.status.finish()
  }
}
