import parseFile from './parsers.js';
import genDiffs from './genDiffs.js';
import getFormatter from './formatters/index.js';

const getFormattedDiff = (pathToFile1, pathToFile2, format) => {
  const obj1 = parseFile(pathToFile1);
  const obj2 = parseFile(pathToFile2);

  const diff = genDiffs(obj1, obj2);

  return getFormatter(format)(diff);
};

export default getFormattedDiff;
