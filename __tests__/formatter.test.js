import getFormattedString from "../src/formatters/index.js";
import {expectedDiff, expectedPlainFormat, expectedStylishFormat} from "../__fixtures__/expects.js";


describe("formatter", () => {
    test.each([
        ["stylish", expectedStylishFormat ],
        ["plain", expectedPlainFormat ]
    ])("%s", (format, expected) => {
        const formattedDiff = getFormattedString(expectedDiff, format)

        expect(formattedDiff).toBe(expected);
    });
});
