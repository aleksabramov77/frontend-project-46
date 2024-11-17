#!/usr/bin/env node
import { Command } from 'commander';
import printFormattedDiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format (choices: "stylish", "plain", "json")', 'stylish')
  .arguments('<pathToFile1>, <pathToFile2>')
  .action((pathToFile1, pathToFile2) => {
    const { format } = program.opts();

    console.log(printFormattedDiff(pathToFile1, pathToFile2, format));
  })
  .parse(process.argv);
