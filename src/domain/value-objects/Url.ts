import { Data } from "effect"

export class Url extends Data.TaggedClass("Url")<{
  readonly value: string
}> {
  static make(value: string): Url | null {
    const trimmed = value.trim()
    if (trimmed.length === 0) return null

    // Allow fragment links (e.g. "#home")
    if (trimmed.startsWith("#") && trimmed.length > 1) {
      return new Url({ value: trimmed })
    }

    try {
      const url = new URL(trimmed)
      return url.protocol === "https:" || url.protocol === "http:"
        ? new Url({ value: url.href })
        : null
    } catch {
      return null
    }
  }

  toString(): string {
    return this.value
  }
}
