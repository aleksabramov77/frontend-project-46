import _ from "lodash";

/**
 * @type {import("../types.js")}
 *
 * @param {Diff[]} diffs
 * @return {string}
 */
const getStylishFormattedString = (diffs) => {
    const prefixByType = {
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
        const depthIndent = prefixByType.unchanged.repeat(depth)

        return  `{\n${diffs.flatMap(({type, key, value, prevValue}) => {
            const typePrefix = prefixByType[type]
            const commonPrefix = depthIndent + typePrefix
            
            if(type === "changed") {
                const commonAddedPrefix = depthIndent + prefixByType.added

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
