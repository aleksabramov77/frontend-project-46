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
        return  `${data.reduce((acc, {type, key, value, prevValue}) => {
            const currentKey = keyPrefix ? `${keyPrefix}.${key}` : key
            
            if(type === "removed") {
                acc.push(`Property '${currentKey}' was removed`)
            } else if(type === "added") {
                acc.push(`Property '${currentKey}' was added with value: ${formatValue(value)}`)
            } else if(type === "changed") {
                acc.push(`Property '${currentKey}' was updated. From ${formatValue(prevValue.value)} to ${formatValue(value)}` )
            } else if(_.isObjectLike(value)) {
                 acc.push(iter(value, currentKey))
            }

            return acc
        }, []).join('\n')}`
    }

    return iter(diffs)
}


export default getPlainFormattedString
