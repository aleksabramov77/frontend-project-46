#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import fs from 'fs';

const program = new Command();

const action = (pathToFile1, pathToFile2) => {
    const file1 = JSON.parse(fs.readFileSync(path.resolve(pathToFile1)))
    const file2 = JSON.parse(fs.readFileSync(path.resolve(pathToFile2)))

    console.log(file1, file2)

}

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]',  'output format')
    .arguments('<pathToFile1>, <pathToFile2>')
    .action(action)
    .parse(process.argv);
