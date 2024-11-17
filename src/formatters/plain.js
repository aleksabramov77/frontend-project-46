import _ from "lodash";

const formatValue = (value) => {
    if (_.isString(value)) {
        return `'${value}'`;
    }
    if (_.isObject(value)) {
        return "[complex value]";
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
    const iter = (data, keyPrefix = "") => {
        return  `${data.reduce((acc, {state, key, value, prevValue}) => {
            const currentKey = keyPrefix ? `${keyPrefix}.${key}` : key
            
            if(state === "unchanged") {
                if(_.isObjectLike(value)) {
                     acc.push(iter(value, currentKey))
                }
            } else if(state === "removed") {
                acc.push(`Property '${currentKey}' was removed`)
            } else if(state === "added") {
                acc.push(`Property '${currentKey}' was added with value: ${formatValue(value)}`)
            } else if(state === "changed") {
                acc.push(`Property '${currentKey}' was updated. From ${formatValue(prevValue.value)} to ${formatValue(value)}` )
            }

            return acc
        }, []).join('\n')}`
    }

    return iter(diffs)
}


export default getPlainFormattedString
