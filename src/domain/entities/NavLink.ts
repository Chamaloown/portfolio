import { NonEmptyString } from "../value-objects/NonEmptyString"
import { Url } from "../value-objects/Url"

export interface NavLink {
  readonly label: NonEmptyString
  readonly href: Url
}
