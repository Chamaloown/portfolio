import { Data } from "effect"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export class Email extends Data.TaggedClass("Email")<{
  readonly value: string
}> {
  static make(value: string): Email | null {
    const trimmed = value.trim()
    return EMAIL_REGEX.test(trimmed) ? new Email({ value: trimmed }) : null
  }

  toString(): string {
    return this.value
  }
}
