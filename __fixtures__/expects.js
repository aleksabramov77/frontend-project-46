export const expectedObject1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: { key: 'value', doge: { wow: '' } },
  },
  group1: { baz: 'bas', foo: 'bar', nest: { key: 'value' } },
  group2: { abc: 12345, deep: { id: 45 } },
};

export const expectedObject2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: { key5: 'value5' },
    setting6: { key: 'value', ops: 'vops', doge: { wow: 'so much' } },
  },
  group1: { foo: 'bar', baz: 'bars', nest: 'str' },
  group3: { deep: { id: { number: 45 } }, fee: 100500 },
};

export const expectedDiffs = [
  {
    type: 'unchanged',
    key: 'common',
    value: [
      { type: 'added', key: 'follow', value: false },
      { type: 'unchanged', key: 'setting1', value: 'Value 1' },
      { type: 'removed', key: 'setting2', value: 200 },
      {
        type: 'changed',
        key: 'setting3',
        value: null,
        prevValue: { type: 'removed', key: 'setting3', value: true },
      },
      { type: 'added', key: 'setting4', value: 'blah blah' },
      {
        type: 'added',
        key: 'setting5',
        value: [{ type: 'unchanged', key: 'key5', value: 'value5' }],
      },
      {
        type: 'unchanged',
        key: 'setting6',
        value: [
          {
            type: 'unchanged',
            key: 'doge',
            value: [
              {
                type: 'changed',
                key: 'wow',
                value: 'so much',
                prevValue: { type: 'removed', key: 'wow', value: '' },
              },
            ],
          },
          { type: 'unchanged', key: 'key', value: 'value' },
          { type: 'added', key: 'ops', value: 'vops' },
        ],
      },
    ],
  },
  {
    type: 'unchanged',
    key: 'group1',
    value: [
      {
        type: 'changed',
        key: 'baz',
        value: 'bars',
        prevValue: { type: 'removed', key: 'baz', value: 'bas' },
      },
      { type: 'unchanged', key: 'foo', value: 'bar' },
      {
        type: 'changed',
        key: 'nest',
        value: 'str',
        prevValue: {
          type: 'removed',
          key: 'nest',
          value: [{ type: 'unchanged', key: 'key', value: 'value' }],
        },
      },
    ],
  },
  {
    type: 'removed',
    key: 'group2',
    value: [
      { type: 'unchanged', key: 'abc', value: 12345 },
      { type: 'unchanged', key: 'deep', value: [{ type: 'unchanged', key: 'id', value: 45 }] },
    ],
  },
  {
    type: 'added',
    key: 'group3',
    value: [
      {
        type: 'unchanged',
        key: 'deep',
        value: [
          {
            type: 'unchanged',
            key: 'id',
            value: [{ type: 'unchanged', key: 'number', value: 45 }],
          },
        ],
      },
      { type: 'unchanged', key: 'fee', value: 100500 },
    ],
  },
];

export const expectedStylishFormattedString = `{
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
}`;

export const expectedPlainFormattedString = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

export const expectedJsonFormattedString = [
  {
    type: 'unchanged',
    key: 'common',
    value: [
      {
        type: 'added',
        key: 'follow',
        value: false,
      },
      {
        type: 'unchanged',
        key: 'setting1',
        value: 'Value 1',
      },
      {
        type: 'removed',
        key: 'setting2',
        value: 200,
      },
      {
        type: 'changed',
        key: 'setting3',
        value: null,
        prevValue: {
          type: 'removed',
          key: 'setting3',
          value: true,
        },
      },
      {
        type: 'added',
        key: 'setting4',
        value: 'blah blah',
      },
      {
        type: 'added',
        key: 'setting5',
        value: [
          {
            type: 'unchanged',
            key: 'key5',
            value: 'value5',
          },
        ],
      },
      {
        type: 'unchanged',
        key: 'setting6',
        value: [
          {
            type: 'unchanged',
            key: 'doge',
            value: [
              {
                type: 'changed',
                key: 'wow',
                value: 'so much',
                prevValue: {
                  type: 'removed',
                  key: 'wow',
                  value: '',
                },
              },
            ],
          },
          {
            type: 'unchanged',
            key: 'key',
            value: 'value',
          },
          {
            type: 'added',
            key: 'ops',
            value: 'vops',
          },
        ],
      },
    ],
  },
  {
    type: 'unchanged',
    key: 'group1',
    value: [
      {
        type: 'changed',
        key: 'baz',
        value: 'bars',
        prevValue: {
          type: 'removed',
          key: 'baz',
          value: 'bas',
        },
      },
      {
        type: 'unchanged',
        key: 'foo',
        value: 'bar',
      },
      {
        type: 'changed',
        key: 'nest',
        value: 'str',
        prevValue: {
          type: 'removed',
          key: 'nest',
          value: [
            {
              type: 'unchanged',
              key: 'key',
              value: 'value',
            },
          ],
        },
      },
    ],
  },
  {
    type: 'removed',
    key: 'group2',
    value: [
      {
        type: 'unchanged',
        key: 'abc',
        value: 12345,
      },
      {
        type: 'unchanged',
        key: 'deep',
        value: [
          {
            type: 'unchanged',
            key: 'id',
            value: 45,
          },
        ],
      },
    ],
  },
  {
    type: 'added',
    key: 'group3',
    value: [
      {
        type: 'unchanged',
        key: 'deep',
        value: [
          {
            type: 'unchanged',
            key: 'id',
            value: [
              {
                type: 'unchanged',
                key: 'number',
                value: 45,
              },
            ],
          },
        ],
      },
      {
        type: 'unchanged',
        key: 'fee',
        value: 100500,
      },
    ],
  },
];
