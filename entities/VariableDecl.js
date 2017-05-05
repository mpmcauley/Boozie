const Variable = require('../entities/Variable.js');
// const Statement = require('../entities/Statement.js');

class VariableDecl {
  constructor(signifier, ids, initializers) {
    // super();
    this.signifier = signifier;
    this.ids = ids;
    this.initializers = initializers;
    // Object.assign(this, { ids, initializers });
    this.variables = [];
    for (let i = 0; i < this.ids.length; i++) {
      this.variables[i] = new Variable(this.ids[i], this.initializers[i]);
    }
  }

  analyze(context) {
    if (this.ids.length !== this.initializers.length) {
      throw new Error('Number of variables does not equal number of initializers');
    }
    this.variables.forEach(variable => context.add(variable));
  }
  optimize() {
    return this;
  }
  toString() {
    if (this.signifier === 'let') {
      return (`(VariableDecl ${this.variables}`);
    } else {
      return (`(ConstDecl ${this.variables}`);
    }
  }
}

module.exports = VariableDecl;
