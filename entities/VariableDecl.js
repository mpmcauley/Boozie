const Statement = require('../entities/Statement.js');
const Variable = require('../entities/Variable.js');

class VariableDecl extends Statement {
  constructor(ids, initializers) {
    super();
    Object.assign(this, { ids, initializers });
    this.variables = [];
    for (let i = 0; i < ids.length; i++) {
        this.variables[i] = new Variable(this.ids[i], this.initializers[i]);
    }
  }
  analyze(context) {
    if (this.ids.length !== this.initializers.length) {
      throw new Error('Number of variables does not equal number of initializers');
    }

    // We don't want the declared variables to come into scope until after the
    // declaration line, so we will analyze all the initializing expressions
    // first.
    this.initializers.forEach(e => e.analyze(context));
    this.ids.forEach(e => e.analyze(context));
  }
  optimize() {
    return this;
  }
  toString() {
      return (`(VarDecl (${this.variables})`);
  }

}

module.exports = VariableDecl;
