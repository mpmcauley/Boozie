#!/usr/bin/env node

/*
 * A compiler for Boozie.
 *
 * This is a command line application that compiles a Boozie program from
 * a file. There are three options:
 *
 * ./boozie.js -a <filename>
 *     writes out the AST and stops
 *
 * ./boozie.js -i <filename>
 *     writes the decorated AST then stops
 *
 * ./boozie.js <filename>
 *     compiles the Boozie program to JavaScript, writing the generated
 *     JavaScript code to standard output.
 *
 * ./boozie.js -o <filename>
 *     optimizes the intermediate code before generating target JavaScript.
 *
 * Output of the AST and decorated AST uses the object inspection functionality
 * built into Node.js.
 */

const argv = require('yargs')
  .usage('$0 [-a] [-o] [-i] [-s] filename')
  .boolean(['a', 'o', 'i', 's'])
  .describe('a', 'show abstract syntax tree after parsing then stop')
  .describe('o', 'do optimizations')
  .describe('i', 'generate and show the decorated abstract syntax tree then stop')
  .describe('s', 'analyze semantics')
  .demand(1)
  .argv;

const fs = require('fs');
const util = require('util');
const parse = require('./parser');
require('./backend/javascript-generator');

fs.readFile(process.argv[2], 'utf-8', (err, text) => {
  if (err) {
    console.error(err);
    return;
  }
  let program = parse(text);
  if (argv.a) {
    console.log(util.inspect(program, { depth: null }));
    return;
  }
  // program.analyze();
  if (argv.o) {
    program = program.optimize();
  }
  if (argv.i) {
    console.log(util.inspect(program, { depth: null }));
    return;
  }
  if (argv.s) {
    program.analyze();
    return;
  }
  console.log('gen' in program.constructor.prototype);
  program.gen();
});
