import { BuyOrder } from '../BuyOrder'

export abstract class OrderStatus {
  abstract value: string

  constructor(readonly buyOrder: BuyOrder) {}

  abstract order(): void
  abstract setOutdated(): void
  abstract extendDeadline(): void
  abstract finish(): void
}

export class InProgressStatus extends OrderStatus {
  value: string

  constructor(buyOrder: BuyOrder) {
    super(buyOrder)
    this.value = 'in_progress'
  }

  order(): void {
    throw new Error('Invalid status')
  }

  setOutdated(): void {
    this.buyOrder.status = new OutdatedStatus(this.buyOrder)
  }

  extendDeadline(): void {
    throw new Error('Invalid status')
  }

  finish(): void {
    this.buyOrder.status = new DeliveredStatus(this.buyOrder)
  }
}

export class OutdatedStatus extends OrderStatus {
  value: string

  constructor(buyOrder: BuyOrder) {
    super(buyOrder)
    this.value = 'outdated'
  }

  order(): void {
    throw new Error('Invalid status')
  }

  setOutdated(): void {
    throw new Error('Invalid status')
  }

  extendDeadline(): void {
    this.buyOrder.status = new ExtendedStatus(this.buyOrder)
  }

  finish(): void {
    throw new Error('Invalid status')
  }
}

export class ExtendedStatus extends OrderStatus {
  value: string

  constructor(buyOrder: BuyOrder) {
    super(buyOrder)
    this.value = 'extended'
  }

  order(): void {
    throw new Error('Invalid status')
  }

  setOutdated(): void {
    throw new Error('Invalid status')
  }

  extendDeadline(): void {
    throw new Error('Invalid status')
  }

  finish(): void {
    this.buyOrder.status = new DeliveredStatus(this.buyOrder)
  }
}

export class DeliveredStatus extends OrderStatus {
  value: string

  constructor(buyOrder: BuyOrder) {
    super(buyOrder)
    this.value = 'delivered'
  }

  order(): void {
    throw new Error('Invalid status')
  }

  setOutdated(): void {
    throw new Error('Invalid status')
  }

  extendDeadline(): void {
    throw new Error('Invalid status')
  }

  finish(): void {
    throw new Error('Invalid status')
  }
}

export class OrderStatusFactory {
  static create(type: string, buyOrder: BuyOrder) {
    if (type === 'in_progress') return new InProgressStatus(buyOrder)
    if (type === 'outdated') return new OutdatedStatus(buyOrder)
    if (type === 'extended') return new ExtendedStatus(buyOrder)
    if (type === 'completed') return new DeliveredStatus(buyOrder)
    throw new Error()
  }
}
