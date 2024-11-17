import fs from "fs";
import path from "path";
import jsYaml from "js-yaml";

const parseJson = (pathToFile) => {
    const fileData = fs.readFileSync(path.resolve(pathToFile), 'utf8')

    return JSON.parse(fileData)
}

const parseYaml = (pathToFile) => {
    const fileData = fs.readFileSync(path.resolve(pathToFile), 'utf8')

    return jsYaml.load(fileData)
}

const parseFile = (pathToFile) => {
    const ext = path.extname(pathToFile)

    if (ext === ".json") {
        return parseJson(pathToFile)
    }


    if (ext === ".yaml") {
        return parseYaml(pathToFile)
    }

    throw new Error(`Unknown file extension: '${ext}'`)
}

export default parseFile
