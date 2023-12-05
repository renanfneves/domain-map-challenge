import { StockAlert } from '../models/valueObjects/StockAlert'

export class SendStockAlert {
  static execute(input: StockAlert) {
    const message = `product ${input.product.id} - ${input.product.name} is reached its minimum limit about ${input.minimumLimit} with total of ${input.amount}`
    this.sendEmail(message)
    this.saveNotification(message)
  }

  private static sendEmail(message: string) {
    console.log('fake email', message)
  }

  private static saveNotification(message: string) {
    console.log('fake notification', message)
  }
}
