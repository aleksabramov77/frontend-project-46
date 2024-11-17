import _ from "lodash";

/**
 * @type {import("../types.js").Data}
 *
 * @param {Data[]} data
 * @return {string}
 */
const getStylishFormattedString = (data) => {
    const prefixByState = {
        unchanged: '    ',
        added: '  + ',
        removed: '  - ',
        changedAdded: '  + ',
        changedRemoved: '  - '
    }

    /**
     * @param {Data[]} data
     * @param {number} depth
     */
    const iter = (data, depth = 0) => {
        const depthIndent = prefixByState["unchanged"].repeat(depth)

        return  `{\n${data.map(({state, key, value}) => {
            const statePrefix = prefixByState[state]
            const commonPrefix = depthIndent + statePrefix
            
            return `${commonPrefix}${key}: ${_.isArray(value) ? iter(value, depth + 1) : value}`
        }).join('\n')}\n${depthIndent}}`
    }

   return iter(data)
};

export default getStylishFormattedString
