let error = require('./error');

const AnalysisContext = (parent) => {
  this.parent = parent;
  this.symbolTable = {};
};

initialContext = () => {
  return new AnalysisContext(null);
};

createChildContext = () => {
  return new AnalysisContext(this);
};

variableMustNotBeAlreadyDeclared = (name) => {
  if (this.symbolTable[name]) {
    return error('Variable ' + name + ' already declared', name);
  }
};

addVariable = (name, entity) => {
  this.symbolTable[name] = entity;
};

lookupVariable = (name) => {
  const variable = this.symbolTable[name];
  if (variable) {
    return variable;
  } else if (!this.parent) {
    error('Variable ' + name + ' not found', name);
    return VariableDecl.ARBITRARY;
  } else {
    return this.parent.lookupVariable(name);
  }
}

exports.initialContext = AnalysisContext.initialContext;
