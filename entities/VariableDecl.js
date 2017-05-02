const Statement = require('../entities/Statement.js');
const Variable = require('../entities/Variable.js');

class VariableDecl extends Statement {
  constructor(signifier, ids, initializers) {
    super();
    this.signifier = signifier;
    // this.id = ids;
    // this.initializer = initializers;
    Object.assign(this, { ids, initializers });
    this.variables = [];
    for (let i = 0; i < this.ids.length; i++) {
      this.variables[i] = new Variable(this.ids[i], this.initializers[i]);
      // console.log(this.ids);
    }
  }

  analyze(context) {
    // console.log("jey");
    if (this.ids.length !== this.initializers.length) {
      throw new Error('Number of variables does not equal number of initializers');
    }

    // for (let e = 0; e < this.initializers.length; e++) {
    //   e.analyze(context);
    // }
    this.initializers.forEach(e => e.analyze(context));
    // console.log(this.id);

    // console.log(this.initializers);
    //
    // this.initializers.forEach(e =>
    //   this.variables.push(this.ids.map(id => new Variable(id, e))));
    // this.variables = this.ids.map(id => new Variable(id));
    this.variables.forEach(variable => context.add(variable));
  }
  optimize() {
    return this;
  }
  toString() {
    if (this.signifier == "let") {
      return (`(VariableDecl ${this.id} = ${this.initializer}`);
    } else {
      return (`(ConstDecl ${this.variables}`);
    }
    // if (this.signifier == "let") {
    //   return (`(VariableDecl ${this.variables.initializer}`);
    // } else {
    //   return (`(ConstDecl ${this.variables}`);
    // }
  }

}

module.exports = VariableDecl;
