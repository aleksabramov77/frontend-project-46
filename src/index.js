import parseFile from "./parsers.js";
import genDiffs from "./genDiffs.js";
import getFormattedString from "./formatters/index.js";

export const printFormattedDiff = (pathToFile1, pathToFile2, format) => {

    const obj1 = parseFile(pathToFile1)
    const obj2 = parseFile(pathToFile2)

    const diff = genDiffs(obj1, obj2)

    const formattedDiff = getFormattedString(diff, format)

    console.log(">>>>>", pathToFile1, pathToFile2, format, pathToFile1, pathToFile2, diff, formattedDiff)
    console.log(formattedDiff)
}

export default printFormattedDiff
