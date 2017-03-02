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
    const match = parse("hey");
    assert.ok(match.succeeded());
  });
  // This is insanely interesting TODO
  it('burp("Hello World") test', () => {
    const match = parse('burp("HelloWorld")');
    assert.ok(match.succeeded());
  });
  it('print("Hello World") should not be a valid function', () => {
    const match = parse('print("Hello World")');
    assert.ok(match.failed());
  });
});

describe('Variable declaration', () => {
  it('let x = 4 should be a valid function', () => {
    const match = parse('let x = 4');
    assert.ok(match.succeeded());
  });
  it('let x = let should not be a valid function', () => {
    const match = parse('let x = let');
    assert.ok(match.failed());
  });
  it('Two separate declarations', () => {
    const match = parse('let x = 5 let y = 6');
    assert.ok(match.succeeded());
  });
  it('Double declaration', () => {
    const match = parse('let x, y = 5, 7');
    assert.ok(match.succeeded());
  });

});

// String literals are not working for some reason as a block, but works as a program alone.
describe('If statement tests', () => {
  it('simple if statement', () => {
    const match = parse(`if(x == 7) { "yes" }`);
    assert.ok(match.succeeded());
  });
  it('bad simple if statement ', () => {
    const match = parse(`if(x 7) { no }`);
    assert.ok(match.failed());
  });
  it('put expression in statment', () => {
    const match = parse(`if(x == 7) { let y = a + b }`);
    assert.ok(match.succeeded());
  });
  it('simple if-else statement', () => {
    const match = parse(`if(x == 7) { let b = r + 1 } else { let q = 8 * 55 }`);
    assert.ok(match.succeeded());
  });
  it('bad simple if-else statement', () => {
    const match = parse(`if(x == 7) { let let } else { let q = 8 * 55 }`);
    assert.ok(match.failed());
  });
  it('if-else if statement', () => {
    const match = parse(`if(x == 7) { let b = r + 1 } else if (y == 2) { let q = 8 * 55 }`);
    assert.ok(match.succeeded());
  });
  it('bad if-else statement', () => {
    const match = parse(`if(x == 7) { let b = r + 1 } else if { let q = 8 * 55 }`);
    assert.ok(match.failed());
  });

  it('if-elseif-else statement', () => {
    const match = parse(`if(x == 7) { let b = r + 1 } else if (y == 2) { let q = 8 * 55 } else { burp(5) }`);
    if (match.failed()) {
      console.log(match.message);
    }
    assert.ok(match.succeeded());
  });
});

describe('While loop tests', () => {
  it('simple while loop', () => {
    const match = parse('while x < 9 {  }');
    assert.ok(match.succeeded());
  });
  it('while loop', () => {
    const match = parse('while something { if(x == 2) { let y = 6 } }');
    assert.ok(match.succeeded());
  });
  it('bad while loop', () => {
    const match = parse('while let x = 8 { hey }');
    assert.ok(match.failed());
  });
  it('nested while loop', () => {
    const match = parse('while true { while x < 5 { let y = "hey" } }');
    assert.ok(match.succeeded());
  });

});


describe('For loop tests', () => {
  it('simple for loop', () => {
    const match = parse('for breed in dog { let x = 7 }');
    assert.ok(match.succeeded());
  });
});
