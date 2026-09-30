import { NonEmptyString } from "../value-objects/NonEmptyString"

export interface Tech {
  readonly name: NonEmptyString
  readonly color: NonEmptyString
  readonly colorDark: NonEmptyString
}
