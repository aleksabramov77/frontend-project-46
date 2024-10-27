import _ from 'lodash';

/**
 * @type {import("./formatter.js").Data}
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Data}
 */
const genDiff = (obj1, obj2 = obj1) => {
    const keysOfObj1 = _(obj1).keys().value()
    const keysOfObj2 = _(obj2).keys().value()
    const allKeys = _.union(keysOfObj1, keysOfObj2).sort()

    return allKeys.flatMap((key) => {
        const value1 = obj1[key]
        const value2 = obj2[key]

        const getValue = (value1, value2) => _.isObject(value1) ? genDiff(value1, value2) : value1

        if(value1 === value2 || (_.isObject(value1) && _.isObject(value2))) {
            return [{state: "unchanged", key, value: getValue(value1, value2)}]
        }

        return [
            value1 !== undefined && {state: "removed", key, value: getValue(value1)},
            value2 !== undefined && {state: "added", key, value: getValue(value2)}
        ].filter(Boolean)
    })
}

export default genDiff
