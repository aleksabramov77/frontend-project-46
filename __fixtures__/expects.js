
export const expectedObject1 = {
    common: {
        setting1: "Value 1",
        setting2: 200,
        setting3: true,
        setting6: { key: "value", doge: { wow: "" } },
    },
    group1: { baz: "bas", foo: "bar", nest: { key: "value" } },
    group2: { abc: 12345, deep: { id: 45 } },
};

export const expectedObject2 = {
    common: {
        follow: false,
        setting1: "Value 1",
        setting3: null,
        setting4: "blah blah",
        setting5: { key5: "value5" },
        setting6: { key: "value", ops: "vops", doge: { wow: "so much" } },
    },
    group1: { foo: "bar", baz: "bars", nest: "str" },
    group3: { deep: { id: { number: 45 } }, fee: 100500 },
};

export const expectedDiff = [
    {
        state: "unchanged",
        key: "common",
        value: [
            { state: "added", key: "follow", value: false },
            { state: "unchanged", key: "setting1", value: "Value 1" },
            { state: "removed", key: "setting2", value: 200 },
            { state: "removed", key: "setting3", value: true },
            { state: "added", key: "setting3", value: null },
            { state: "added", key: "setting4", value: "blah blah" },
            {
                state: "added",
                key: "setting5",
                value: [{ state: "unchanged", key: "key5", value: "value5" }],
            },
            {
                state: "unchanged",
                key: "setting6",
                value: [
                    {
                        state: "unchanged",
                        key: "doge",
                        value: [
                            { state: "removed", key: "wow", value: "" },
                            { state: "added", key: "wow", value: "so much" },
                        ],
                    },
                    { state: "unchanged", key: "key", value: "value" },
                    { state: "added", key: "ops", value: "vops" },
                ],
            },
        ],
    },
    {
        state: "unchanged",
        key: "group1",
        value: [
            { state: "removed", key: "baz", value: "bas" },
            { state: "added", key: "baz", value: "bars" },
            { state: "unchanged", key: "foo", value: "bar" },
            {
                state: "removed",
                key: "nest",
                value: [{ state: "unchanged", key: "key", value: "value" }],
            },
            { state: "added", key: "nest", value: "str" },
        ],
    },
    {
        state: "removed",
        key: "group2",
        value: [
            { state: "unchanged", key: "abc", value: 12345 },
            { state: "unchanged", key: "deep", value: [{ state: "unchanged", key: "id", value: 45 }] },
        ],
    },
    {
        state: "added",
        key: "group3",
        value: [
            {
                state: "unchanged",
                key: "deep",
                value: [
                    {
                        state: "unchanged",
                        key: "id",
                        value: [{ state: "unchanged", key: "number", value: 45 }],
                    },
                ],
            },
            { state: "unchanged", key: "fee", value: 100500 },
        ],
    },
];

export const expectedStylishFormat = `{
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
