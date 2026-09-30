import { NonEmptyString } from "../value-objects/NonEmptyString"

export interface Stat {
  readonly value: NonEmptyString
  readonly label: NonEmptyString
}
