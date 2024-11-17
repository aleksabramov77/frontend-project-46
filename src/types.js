/**
 * @typedef {"changed" | "unchanged" | "removed" | "added"} DiffType
 *
 * @typedef {{
 *      type: DiffType,
 *      key: string,
 *      prevValue: string | boolean | number | null | Data[]
 *      value: string | boolean | number | null | Data[]
 * }} Diff
 */
