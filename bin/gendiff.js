#!/usr/bin/env node
import { Command } from 'commander';
import genDiffs from "../src/genDiffs.js";
import {parseFile} from "../src/parsers.js";
import getFormattedString from "../src/formatters/index.js";

const program = new Command();

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]',  'output format (choices: "stylish", "plain")', 'stylish')
    .arguments('<pathToFile1>, <pathToFile2>')
    .action((pathToFile1, pathToFile2) => {
        const { format } = program.opts()

        const obj1 = parseFile(pathToFile1)
        const obj2 = parseFile(pathToFile2)

        const diff = genDiffs(obj1, obj2)

        const formattedDiff = getFormattedString(diff, format)

        console.log(formattedDiff)
    })
    .parse(process.argv);
