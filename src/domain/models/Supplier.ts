export class Supplier {
  private constructor(
    readonly name: string,
    readonly contactNumber: string,
    readonly averageDeadlineDays: number,
    readonly id?: string,
  ) {}

  static create(
    name: string,
    contactNumber: string,
    averageDeadlineDays: number,
  ) {
    return new Supplier(name, contactNumber, averageDeadlineDays)
  }

  static restore(
    name: string,
    contactNumber: string,
    averageDeadlineDays: number,
    id: string,
  ) {
    return new Supplier(name, contactNumber, averageDeadlineDays, id)
  }
}
