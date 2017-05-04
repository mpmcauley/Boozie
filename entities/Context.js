const FuncDecl = require('../entities/FuncDecl.js');
const FunctionObject = require('../entities/FunctionObject');
const Args = require('../entities/Args');
// const error = require('../error.js');

class Context {
  constructor({ parent, currentFunction, inLoop }) {
    this.currentFunction = currentFunction;
    this.inLoop = inLoop;
    this.parent = parent;
    this.localVariables = Object.create(null); // TODO - distinguish between const and var
    // need a dictionary
  }

  add(variable) {
    if (variable.id in this.localVariables) {
      throw new Error(`Identitier ${variable.id} already declared in this scope`);
    }
    this.localVariables[variable.id] = variable.value;
  }
  // replace(id, value) {
  //   if (id in! this.localVariables) {
  //     throw new Error(`Identitier ${id} is not declared in this scope`);
  //   }
  //   this.localVariables[id] = value;
  // }

  addFunc(entity) {
    if (entity.id in this.localVariables) {
      throw new Error(`Identitier ${entity.id} already declared in this scope`);
    }
    this.localVariables[entity.id] = entity;
  }

  lookup(id) {
    if (id in this.localVariables) {
      return this.localVariables[value];
    }
    if (this.parent === null) {
      throw new Error(`Identitier ${id} has not been declared`);
    }
    return this.parent.lookup(id);
  }

  createChildContextForFunctionBody(currentFunction) {
      // When entering a new function, we're not in a loop anymore
    return new Context({ parent: this, currentFunction, inLoop: false });
  }
  createChildContextForLoop() {
    // When entering a loop body, just set the inLoop field, retain others
    return new Context({ parent: this, currentFunction: this.currentFunction, inLoop: true });
  }

  createChildContextForBlock() {
    // For a simple block (i.e., in an if-statement), we have to retain both
    // the function and loop settings.
    return new Context({
      parent: this,
      currentFunction: this.currentFunction,
      inLoop: this.inLoop,
    });
  }
  assertInFunction(message) {
    if (!this.currentFunction) {
      throw new Error(message);
    }
  }
  assertIsFunction(entity) { // eslint-disable-line class-methods-use-this
    if (entity.constructor !== FunctionObject) {
      throw new Error(`${entity.id} is not a function`);
    }
  }
}


Context.INITIAL_CONTEXT = new Context({
  parent: null,
  currentFunction: null,
  inLoop: false,
});

// new FuncDecl('print', [new Args('_', null)], null).analyze(Context.INITIAL);
// new FuncDecl('sqrt', [new Args('_', null)], null).analyze(Context.INITIAL);


module.exports = Context;
