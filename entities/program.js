const Context = require('../entities/Context.js');

class Program {
  constructor(block) {
    this.block = block;
  }
  analyze() {
    const context = new Context({ parent: Context.INITIAL_CONTEXT });
    this.block.analyze(context);
  }
  optimize() {
    this.block.map(s => s.optimize()).filter(s => s !== null);
    return this;
  }
  toString() {
    return (`(Program ${this.block})`);
  }
  // Program.prototype.analyze = (context) => {
  //   this.body.analyze(context);
  // }
}
module.exports = Program;
