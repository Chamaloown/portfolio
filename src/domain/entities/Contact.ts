import { Email } from "../value-objects/Email"
import { Url } from "../value-objects/Url"

export interface Contact {
  readonly email: Email
  readonly github: Url
  readonly linkedin: Url
  readonly twitter: Url
}
