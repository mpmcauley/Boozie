const fs = require('fs');
const ohm = require('ohm-js');
const assert = require('assert');

function parse(string) {
  const grammar = ohm.grammar(fs.readFileSync(`./syntax.ohm`));
  return grammar.match(string);
}

describe('Boozie', () => {
  it('An empty file should be a valid program', () => {
      const match = parse('');
      assert.ok(match.succeeded());
  });
    it('burp("Hello World") should be a valid function', () => {
        const match = parse('burp("Hello World")');
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
});
