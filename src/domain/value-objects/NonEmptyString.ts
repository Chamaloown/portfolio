import { Data } from "effect"

export class NonEmptyString extends Data.TaggedClass("NonEmptyString")<{
  readonly value: string
}> {
  static make(value: string): NonEmptyString | null {
    const trimmed = value.trim()
    return trimmed.length > 0 ? new NonEmptyString({ value: trimmed }) : null
  }
}
