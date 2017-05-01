const error = require('../error.js');

class Context {
  constructor({ parent, inFunction, inLoop }) {
    this.inFunction = inFunction;
    this.inLoop = inLoop;
    this.parent = parent;
    this.localVariables = Object.create(null); // TODO - distinguish between const and var
    // need a dictionary
  }
  declare(id, type) {
    if (id in this.localVariables) {
      error(`${id} already declared`);
    } else {
      this.localVariables[id] = type;
    }
  }

  hasBeenDeclared(id) {
    if (id in this.localVariables) {
      return true;
    }
    if (this.parent === null) {
      return false;
    }
    return this.parent.hasBeenDeclared(id);
  }
}

Context.INITIAL_CONTEXT = new Context({
  parent: null,
  inFunction: false,
  inLoop: false,
});

module.exports = Context;
