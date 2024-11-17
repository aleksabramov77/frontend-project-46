import _ from "lodash";

/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @return {string}
 */
const getJsonFormattedString = (diffs) => {
    return JSON.stringify(diffs, null, 2)
}


export default getJsonFormattedString
