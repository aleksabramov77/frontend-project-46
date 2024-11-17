/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @return {string}
 */
const getJsonFormattedString = (diffs) => JSON.stringify(diffs, null, 2);

export default getJsonFormattedString;
