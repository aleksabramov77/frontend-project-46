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
 * @type {import("../types.js").Data}
 *
 * @param {Data[]} data
 * @return {string}
 */
const getPlainFormattedString = (data) => {
    /**
     * @param {Data[]} data
     * @param {string} keyPrefix
     */
    const iter = (data, keyPrefix = "") => {

        return  `${data.reduce((acc, {state, key, value}, index) => {
            const currentKey = keyPrefix ? `${keyPrefix}.${key}` : key
            
            if(state === "unchanged") {
                if(_.isObjectLike(value)) {
                     acc.push(iter(value, currentKey))

                    return acc
                }
            }

            if(state === "removed") {
                acc.push(`Property '${currentKey}' was removed`)

                return acc
            }

            if(state === "added") {
                acc.push(`Property '${currentKey}' was added with value: ${formatValue(value)}`)

                return acc
            }
            
            if(state === "changedRemoved") {
                const nextValue = data[index + 1]

                acc.push(`Property '${currentKey}' was updated. From ${formatValue(value)} to ${formatValue(nextValue.value)}` )
            }


            return acc
        }, []).join('\n')}`
    }

    return iter(data)
}


export default getPlainFormattedString
