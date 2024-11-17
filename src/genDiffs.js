import _ from 'lodash';

/**
 * @type {import("./types.js")}
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Diff[]}
 */
const genDiffs = (obj1, obj2 = obj1) => {
  const keysOfObj1 = _.keys(obj1);
  const keysOfObj2 = _.keys(obj2);
  const allKeys = _([keysOfObj1, keysOfObj2])
    .flatten()
    .union()
    .sortBy()
    .value();

  return allKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const getValue = (val1, val2) => (_.isObject(val1) ? genDiffs(val1, val2) : val1);

    if (value1 === value2 || (_.isObject(value1) && _.isObject(value2))) {
      return { type: 'unchanged', key, value: getValue(value1, value2) };
    }

    const removedData = value1 !== undefined && { type: 'removed', key, value: getValue(value1) };
    const addedData = value2 !== undefined && { type: 'added', key, value: getValue(value2) };

    if (removedData && addedData) {
      return { ...addedData, type: 'changed', prevValue: removedData };
    }

    return removedData || addedData;
  });
};

export default genDiffs;
