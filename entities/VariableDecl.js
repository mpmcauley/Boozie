const Variable = require('../entities/Variable.js');

class VariableDecl {
  constructor(signifier, ids, initializers) {
    this.signifier = signifier;
    Object.assign(this, { ids, initializers });
    this.variables = [];
    for (let i = 0; i < this.ids.length; i++) {
      this.variables[i] = new Variable(this.ids[i], this.initializers[i]);
    }
  }
  analyze(context) {
    if (this.ids.length !== this.initializers.length) {
      throw new Error('Number of variables does not equal number of initializers');
    }

    this.initializers.forEach(e => e.analyze(context));

    // this.initializers.forEach(e =>
      // this.variables.push(this.ids.map(id => new Variable(id, e))));
    this.variables.forEach(variable => context.add(variable));
    // return this.initializers;
  }
  optimize() {
    return this;
  }
  toString() {
    if (this.signifier == "let") {
      return (`(VariableDecl ${this.variables}`);
    } else {
      return (`(ConstDecl ${this.variables}`);
    }
  }

}

module.exports = VariableDecl;
