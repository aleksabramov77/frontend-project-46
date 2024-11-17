import _ from 'lodash';

const formatValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return String(value);
};

/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @return {string}
 */
const getPlainFormattedString = (diffs) => {
  /**
     * @param {Diff[]} data
     * @param {string} keyPrefix
     */
  const iter = (data, keyPrefix = '') => `${data.reduce((acc, {
    type, key, value, prevValue,
  }) => {
    const currentKey = keyPrefix ? `${keyPrefix}.${key}` : key;

    if (type === 'removed') {
      return [...acc, `Property '${currentKey}' was removed`];
    }

    if (type === 'added') {
      return [...acc, `Property '${currentKey}' was added with value: ${formatValue(value)}`];
    }

    if (type === 'changed') {
      return [...acc, `Property '${currentKey}' was updated. From ${formatValue(prevValue.value)} to ${formatValue(value)}`];
    }

    if (_.isObjectLike(value)) {
      return [...acc, iter(value, currentKey)];
    }

    return acc;
  }, []).join('\n')}`;

  return iter(diffs);
};

export default getPlainFormattedString;
