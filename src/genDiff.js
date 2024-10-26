import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
    const file1 = fs.readFileSync(path.resolve(pathToFile1))
    const file2 = fs.readFileSync(path.resolve(pathToFile2))

    const obj1 = JSON.parse(file1)
    const obj2 = JSON.parse(file2)

    const keysOfObj1 = _(obj1).keys().value()
    const keysOfObj2 = _(obj2).keys().value()
    const allKeys = _.union(keysOfObj1, keysOfObj2)


    const diffs = allKeys.flatMap((key) => {
        if (obj1[key] === obj2[key]) {
            return `  ${key}: ${obj1[key]}`
        }

        if(obj2[key] === undefined ) {
            return `- ${key}: ${obj1[key]}`
        }

        if(obj1[key] === undefined ) {
            return `+ ${key}: ${obj2[key]}`
        }

        return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`]
    })

    return `{\n ${diffs.join('\n ')}\n}`
}

export default genDiff
