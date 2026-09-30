import { NonEmptyString } from "../value-objects/NonEmptyString"
import { Availability } from "../value-objects/Availability"

export interface Profile {
  readonly name: NonEmptyString
  readonly title: NonEmptyString
  readonly greeting: NonEmptyString
  readonly description: NonEmptyString
  readonly available: Availability
}
