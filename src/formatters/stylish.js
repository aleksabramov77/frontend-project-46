import _ from "lodash";

/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @return {string}
 */
const getStylishFormattedString = (diffs) => {
    const prefixByState = {
        unchanged: '    ',
        added: '  + ',
        removed: '  - ',
        changed: '  - ',
    }

    /**
     * @param {Diff[]} diffs
     * @param {number} depth
     * @return {string}
     */
    const iter = (diffs, depth = 0) => {
        const depthIndent = prefixByState.unchanged.repeat(depth)

        return  `{\n${diffs.flatMap(({state, key, value, prevValue}) => {
            const statePrefix = prefixByState[state]
            const commonPrefix = depthIndent + statePrefix
            
            if(state === "changed") {
                const commonAddedPrefix = depthIndent + prefixByState.added

                return [
                    `${commonPrefix}${key}: ${_.isArray(prevValue.value) ? iter(prevValue.value, depth + 1) : prevValue.value}`,
                    `${commonAddedPrefix}${key}: ${_.isArray(value) ? iter(value, depth + 1) : value}`
                ]
            }
            
            return `${commonPrefix}${key}: ${_.isArray(value) ? iter(value, depth + 1) : value}`
        }).join('\n')}\n${depthIndent}}`
    }

   return iter(diffs)
};

export default getStylishFormattedString
