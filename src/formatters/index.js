import getStylishFormattedString from './stylish.js';
import getPlainFormattedString from './plain.js';

const getFormatter = (format) => {
  if (format === 'stylish') {
    return getStylishFormattedString;
  }

  if (format === 'plain') {
    return getPlainFormattedString;
  }

  if (format === 'json') {
    return JSON.stringify;
  }

  return getStylishFormattedString;
};

export default getFormatter;
