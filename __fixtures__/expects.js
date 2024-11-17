
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
            { state: "changedRemoved", key: "setting3", value: true },
            { state: "changedAdded", key: "setting3", value: null },
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
                            { state: "changedRemoved", key: "wow", value: "" },
                            { state: "changedAdded", key: "wow", value: "so much" },
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
            { state: "changedRemoved", key: "baz", value: "bas" },
            { state: "changedAdded", key: "baz", value: "bars" },
            { state: "unchanged", key: "foo", value: "bar" },
            {
                state: "changedRemoved",
                key: "nest",
                value: [{ state: "unchanged", key: "key", value: "value" }],
            },
            { state: "changedAdded", key: "nest", value: "str" },
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
                        value: [
                            { state: "unchanged", key: "number", value: 45 }
                        ],
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

export const expectedPlainFormat = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`
