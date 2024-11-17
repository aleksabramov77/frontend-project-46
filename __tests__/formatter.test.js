import getFormattedString from "../src/formatters/index.js";
import {describe, test, expect} from "@jest/globals";
import {expectedDiffs, expectedPlainFormat, expectedStylishFormat} from "../__fixtures__/expects.js";


describe("formatter", () => {
    test.each([
        ["stylish", expectedStylishFormat ],
        ["plain", expectedPlainFormat ]
    ])("%s", (format, expected) => {
        const formattedDiff = getFormattedString(expectedDiffs, format)

        expect(formattedDiff).toBe(expected);
    });
});
