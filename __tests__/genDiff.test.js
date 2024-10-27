import genDiff from "../src/genDiff.js";
import path from "path";
import { fileURLToPath } from "url";
import {describe} from "@jest/globals";
import {parseFile} from "../src/parsers.js";
import formatter from "../src/formatter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const result = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`

describe("genDiff", () => {
    test.each([
        ["json","json", "stylish"],
        ["yaml","yaml", "stylish"],
        ["json","yaml", "stylish"],
        ["yaml","json", "stylish"],
    ])("%s <-> %s, format '%s'", (file1Ext, file2Ext, format) => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", `file1.${file1Ext}`)
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", `file2.${file2Ext}`)
        const obj1 = parseFile(pathToFile1)
        const obj2 = parseFile(pathToFile2)

        expect(formatter(genDiff(obj1, obj2), format)).toBe(result);
    });
});
