import path from "path";
import { fileURLToPath } from "url";
import { describe, test, expect } from "@jest/globals";
import parseFile from "../src/parsers.js";
import { expectedObject1, expectedObject2 } from "../__fixtures__/expects.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


describe("parseFile", () => {
    test.each([ "json", "yaml", "yml"])("%s", (fileExt) => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", `file1.${fileExt}`)
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", `file2.${fileExt}`)

        const object1 = parseFile(pathToFile1)
        const object2 = parseFile(pathToFile2)

        expect(object1).toEqual(expectedObject1);
        expect(object2).toEqual(expectedObject2);
    });
});
