import { NonEmptyString } from "../value-objects/NonEmptyString"
import { Url } from "../value-objects/Url"

export interface Project {
  readonly title: NonEmptyString
  readonly description: NonEmptyString
  readonly tags: readonly NonEmptyString[]
  readonly link: Url
}
