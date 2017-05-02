// const assert = require('assert');
// const parse = require('../parser');
// const analyze = require('../analyzer');
// const gen = require('../backend/javascript-generator');
//
// describe('Code Generator Test', () => {
//   describe('simple programs', () => {
//     it('hello world program', () => {
//       const compile = gen('burp("HelloWorld")');
//       const expected = 'console.log("HelloWorld");';
//       assert.equal(ast, expected);
//     });
//   });
//   describe('assignment statements', () => {
//     it('simple variable declaration', () => {
//       const compile = gen('let beer = "beer"');
//       const expected = 'let beer = "beer";';
//       assert.equal(ast, expected);
//     });
//     it('simple constant declaration', () => {
//       const compile = gen('set beer = "beer"');
//       const expected = 'const beer = "beer";';
//       assert.equal(ast, expected);
//     });
//     it('array variable declaration', () => {
//       const compile = gen('let beers = ["Blue Moon", "Shock Top"]');
//       const expected = 'let beers = ["Blue Moon", "Shock Top"];';
//       assert.equal(ast, expected);
//     });
//     it('array constant declaration', () => {
//       const compile = gen('set beers = ["Blue Moon", "Shock Top"]');
//       const expected = 'const beers = ["Blue Moon", "Shock Top"];';
//       assert.equal(ast, expected);
//     });
//   });
//   describe('conditionals and loops', () => {
//     it('if statements', () => {
//       const compile = gen('if beerVolume == 0 { beerVolume = 16 };')
//       const expected = gen('if (beerVolume == 0) { beerVolume = 16; };')
//       assert.equal(ast, expected);
//     });
//     it('if-else statements', () => {
//       const compile = gen(`if beerVolume == 0 {
//         beerVolume = 16
//       } else if beerVolume >= 1 {
//         beerVolume = beerVolume - 1
//       } else {
//         beerVolume = beerVolume - 5
//       }`);
//       const expected = `if (beerVolume == 0) {
//         beerVolume = 16;
//       } else if (beerVolume >= 1) {
//         beerVolume = beerVolume - 1;
//       } else {
//         beerVolume = beerVolume - 5;
//       }`;
//       assert.equal(ast, expected);
//     });
//     it('for loops', () => {
//       const compile = gen('for brand in allBrands { burp(brand) }');
//       const expected = 'for (let brand of allBrands) { console.log(brand); brand += 1; };';
//       assert.equal(ast, expected);
//     });
//     it('while loops', () => {
//       const compile = gen('while beerVolume > 0 { beerVolume = beerVolume - 1 }');
//       const expected = 'while (beerVolume > 0) { beerVolume = beerVolume - 1; };';
//       assert.equal(ast, expected);
//     });
//   });
// });
