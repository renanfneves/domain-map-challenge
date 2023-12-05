import { SendStockAlert } from '../services/SendStockAlert'
import { Stock } from './valueObjects/Stock'
import { StockAlert } from './valueObjects/StockAlert'

export class Product {
  private constructor(
    public name: string,
    public color: string,
    public size: string,
    readonly stock: Stock,
    readonly id?: string,
  ) {}

  static create(
    name: string,
    color: string,
    size: string,
    amount: number,
    minimumLimit: number,
  ) {
    return new Product(name, color, size, new Stock(amount, minimumLimit))
  }

  static restore(
    name: string,
    color: string,
    size: string,
    amount: number,
    minimumLimit: number,
    id: string,
  ) {
    return new Product(name, color, size, new Stock(amount, minimumLimit), id)
  }

  processSale(amount: number) {
    if (!this.id) throw new Error('Product not found')
    this.stock.takeOffStock(amount)
    if (this.stock.isEqualOrUnderMinimumLimit()) {
      this.sendStockAlert()
    }
  }

  private sendStockAlert() {
    const alert = new StockAlert(
      {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: this.id!,
        name: this.name,
      },
      this.stock.getAmount(),
      this.stock.getMinimumLimit(),
    )
    SendStockAlert.execute(alert)
  }
}
