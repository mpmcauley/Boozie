const error = require('../error.js');

class FunctionCall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }
  analyze(context) {
    if (!context.hasBeenDeclared(this.id)) {
      error(`Function ${this.id} has not been declared`);
    }
    this.function = context.lookup(this.id);
    const numArgs = this.args.length;
    const numParams = this.function.params.length;
    if (numArgs !== numParams) {
      error(`Function ${numArgs} was called with ${numArgs} args but we expected ${numParams}`);
    }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(FunctionCall${this.id} (${this.args}))`);
  }
}

module.exports = FunctionCall;
