import {test, expect} from "@jest/globals";
import genDiffs from "../src/genDiffs.js";
import {expectedDiffs, expectedObject1, expectedObject2} from "../__fixtures__/expects.js";

test("genDiff", () => {
    const diff = genDiffs(expectedObject1, expectedObject2);

    expect(diff).toEqual(expectedDiffs);
});
