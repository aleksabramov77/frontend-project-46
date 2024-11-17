import getStylishFormattedString from "./stylish.js";
import getPlainFormattedString from "./plain.js";

/**
 * @type {import("../types.js").Diff}
 *
 * @param {Diff[]} diffs
 * @param {"stylish" | string} format
 * @return {string}
 */
const getFormattedString = (diffs, format) => {
    if(format === "stylish") {
        return getStylishFormattedString(diffs)
    }

    if(format === "plain") {
        return getPlainFormattedString(diffs)
    }

    throw new Error(`Unknown format: '${format}'`)
}

export default getFormattedString
