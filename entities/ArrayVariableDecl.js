const Statement = require('../entities/Statement.js');
const Variable = require('../entities/Variable.js');

class ArrayVariableDecl extends Statement {
  constructor(id, initializer) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  // ArrayVariableDecl.prototype.analyze(context) {
  //   context.variableMustNotBeAlreadyDeclared(this.id);
  //   return context.addVariable(this.id, this);
  // }
  analyze(context) {
    this.initializer.analyze(context);
    this.initializer.forEach(e =>
      this.variables.push(this.ids.map(id => new Variable(id, e))));
    this.variables.forEach(variable => context.add(variable));
      // context.declare(this.id, this, this.value);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(ArrayVariableDecl ${this.id.join(', ')} =  ${this.value.join(', ')} ] )`);
  }
}

module.exports = ArrayVariableDecl;
