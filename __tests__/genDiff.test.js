import genDiff from "../src/genDiff.js";
import path from "path";
import { fileURLToPath } from "url";
import {describe} from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("genDiff", () => {
    test("json-json", () => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", "file1.json")
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", "file2.json")

        expect(genDiff(pathToFile1, pathToFile2)).toBe(`{
   host: hexlet.io
 - timeout: 50
 + timeout: 20
 - proxy: 123.234.53.22
 - follow: false
 + verbose: true
}`);
    });
    test("yaml-yaml", () => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", "file1.yaml")
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", "file2.yaml")

        expect(genDiff(pathToFile1, pathToFile2)).toBe(`{
   host: hexlet.io
 - timeout: 50
 + timeout: 20
 - proxy: 123.234.53.22
 - follow: false
 + verbose: true
}`);
    });
    test("json-yaml", () => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", "file1.json")
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", "file2.yaml")

        expect(genDiff(pathToFile1, pathToFile2)).toBe(`{
   host: hexlet.io
 - timeout: 50
 + timeout: 20
 - proxy: 123.234.53.22
 - follow: false
 + verbose: true
}`);
    });
    test("yaml-json", () => {
        const pathToFile1 = path.resolve(__dirname, "..", "__fixtures__", "file1.yaml")
        const pathToFile2 = path.resolve(__dirname, "..", "__fixtures__", "file2.json")

        expect(genDiff(pathToFile1, pathToFile2)).toBe(`{
   host: hexlet.io
 - timeout: 50
 + timeout: 20
 - proxy: 123.234.53.22
 - follow: false
 + verbose: true
}`);
    });
});
