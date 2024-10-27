import _ from "lodash";

/**
 * @typedef {"unchanged" | "removed" | "added"} State
 * @typedef {{
 * state: State,
 * key: string,
 * value: string | boolean | number | null | Data
 * }[]} Data
 *
 * @param {Data} data
 * @param {"stylish" | string} format
 * @return {string}
 */
const formatter = (data, format) => {
    if(format === "stylish") {
        const prefixByState = {
            unchanged: '    ',
            added: '  + ',
            removed: '  - '
        }

        /**
         * @param {Data} data
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
    }

    throw new Error(`Unknown format: '${format}'`)

}

export default formatter
