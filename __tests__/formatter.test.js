import { describe, test, expect } from '@jest/globals';
import getFormatter from '../src/formatters/index.js';
import {
  expectedDiffs,
  expectedJson,
  expectedPlainFormattedString,
  expectedStylishFormattedString,
} from '../__fixtures__/expects.js';

describe('formatter', () => {
  test.each([
    ['stylish', expectedStylishFormattedString],
    ['plain', expectedPlainFormattedString],
    ['json', expectedJson],
    ['undefined', expectedStylishFormattedString],
  ])('%s', (format, expected) => {
    const formattedDiff = getFormatter(format)(expectedDiffs);

    expect(formattedDiff).toEqual(expected);
  });
});
