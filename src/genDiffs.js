import _ from 'lodash';

/**
 * @type {import("./types.js")}
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Diff[]}
 */
const genDiffs = (obj1, obj2 = obj1) => {
    const keysOfObj1 = _.keys(obj1)
    const keysOfObj2 = _.keys(obj2)
    const allKeys = _.union(keysOfObj1, keysOfObj2).sort()

    return allKeys.map((key) => {
        const value1 = obj1[key]
        const value2 = obj2[key]

        const getValue = (value1, value2) => _.isObject(value1) ? genDiffs(value1, value2) : value1

        if(value1 === value2 || (_.isObject(value1) && _.isObject(value2))) {
            return {state: "unchanged", key, value: getValue(value1, value2)}
        }

        const removedData = value1 !== undefined && {state: "removed", key, value: getValue(value1)}
        const addedData = value2 !== undefined && {state: "added", key, value: getValue(value2)}

        if(removedData && addedData) {
            return { ...addedData, state: "changed", prevValue: removedData}
        }

        return  removedData || addedData
    })
}

export default genDiffs
