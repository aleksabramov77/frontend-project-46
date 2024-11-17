import getStylishFormattedString from "./stylish.js";
import getPlainFormattedString from "./plain.js";

/**
 * @type {import("../types.js").Data}
 *
 * @param {Data} data
 * @param {"stylish" | string} format
 * @return {string}
 */
const getFormattedString = (data, format) => {
    if(format === "stylish") {
        return getStylishFormattedString(data)
    }

    if(format === "plain") {
        return getPlainFormattedString(data)
    }

    throw new Error(`Unknown format: '${format}'`)
}

export default getFormattedString
