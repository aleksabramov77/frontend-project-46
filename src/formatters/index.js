import getStylishFormattedString from './stylish.js';
import getPlainFormattedString from './plain.js';
import getJsonFormattedString from './json.js';

/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @param {"stylish" | "plain" | "json"} format
 * @return {string | never}
 */
const getFormattedString = (diffs, format) => {
  if (format === 'stylish') {
    return getStylishFormattedString(diffs);
  }

  if (format === 'plain') {
    return getPlainFormattedString(diffs);
  }

  if (format === 'json') {
    return getJsonFormattedString(diffs);
  }

  return getStylishFormattedString(diffs);
};

export default getFormattedString;
