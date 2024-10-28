import genDiff from "../src/genDiff.js";
import {expectedDiff, expectedObject1, expectedObject2} from "../__fixtures__/expects.js";

test("genDiff", () => {
    const diff = genDiff(expectedObject1, expectedObject2);

    expect(diff).toEqual(expectedDiff);
});
