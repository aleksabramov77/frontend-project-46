/**
 * @typedef {"changedRemoved" | "changedAdded" | "unchanged" | "removed" | "added"} DiffType
 *
 * @typedef {{
 *      state: DiffType,
 *      key: string,
 *      value: string | boolean | number | null | Data[]
 * }} Data
 */
