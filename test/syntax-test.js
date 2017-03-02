const fs = require('fs');
const ohm = require('ohm-js');
const assert = require('assert');

function parse(string) {
  const grammar = ohm.grammar(fs.readFileSync(`./syntax.ohm`));
  return grammar.match(string);
}

describe('Boozie', () => {
  it('an empty file should be a valid program', () => {
    const match = parse('');
    assert.ok(match.succeeded());
  });
  it('simple one-string program', () => {
    const match = parse('hey');
    assert.ok(match.succeeded());
  });
  // This is insanely interesting TODO
  it('burp("Hello World") test', () => {
    const match = parse('burp(HelloWorld)');
    assert.ok(match.succeeded());
  });
  it('print("Hello World") should not be a valid function', () => {
    const match = parse('print("Hello World")');
    assert.ok(match.failed());
  });
  it('let x = 4 should be a valid function', () => {
    const match = parse('let x = 4');
    assert.ok(match.succeeded());
  });
  it('let x = let should not be a valid function', () => {
    const match = parse('let x = let');
    assert.ok(match.failed());
  });
});


describe('If statement tests', () => {
  it('simple if statement', () => {
    const match = parse('if(x == 7) { yes }');
    assert.ok(match.succeeded());
  });
  it('bad simple if statement ', () => {
    const match = parse('if(x 7) { no }');
    assert.ok(match.failed());
  });
  it('put expression in statment', () => {
    const match = parse('if(x == 7) { let y = a + b }');
    assert.ok(match.succeeded());
  });
  it('simple if-else statement', () => {
    const match = parse('if(x == 7) { let b = r + 1 } else { let q = 8 * 55 }');
    assert.ok(match.succeeded());
  });
  it('bad simple if-else statement', () => {
    const match = parse('if(x == 7) { let let } else { let q = 8 * 55 }');
    assert.ok(match.failed());
  });
});
