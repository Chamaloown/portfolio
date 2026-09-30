import { Data } from "effect"

export class Availability extends Data.TaggedClass("Availability")<{
  readonly value: boolean
}> {
  static make(value: boolean): Availability {
    return new Availability({ value })
  }

  static true: Availability = new Availability({ value: true })
  static false: Availability = new Availability({ value: false })
}
