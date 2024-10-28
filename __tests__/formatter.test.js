import {describe} from "@jest/globals";
import formatter from "../src/formatter.js";
import {expectedDiff, expectedStylishFormat} from "../__fixtures__/expects.js";


describe("genDiff", () => {
    test.each([ "stylish" ])("%s", (format) => {
        const formattedDiff = formatter(expectedDiff, format)

        expect(formattedDiff).toBe(expectedStylishFormat);
    });
});
