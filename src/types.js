/**
 * @typedef {"changed" | "unchanged" | "removed" | "added"} DiffType
 *
 * @typedef {{
 *      state: DiffType,
 *      key: string,
 *      prevValue:  string | boolean | number | null | undefined
 *      value: string | boolean | number | null | Data[]
 * }} Diff
 */
