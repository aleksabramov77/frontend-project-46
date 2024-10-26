#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from "../src/genDiff.js";

const program = new Command();

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]',  'output format')
    .arguments('<pathToFile1>, <pathToFile2>')
    .action((pathToFile1, pathToFile2) => {
        const diff = genDiff(pathToFile1, pathToFile2)
        console.log(diff)
    })
    .parse(process.argv);
