import parseFile from './parsers.js';
import genDiffs from './genDiffs.js';
import getFormattedString from './formatters/index.js';

const printFormattedDiff = (pathToFile1, pathToFile2, format) => {
  const obj1 = parseFile(pathToFile1);
  const obj2 = parseFile(pathToFile2);

  const diff = genDiffs(obj1, obj2);

  return getFormattedString(diff, format);
};

export default printFormattedDiff;
