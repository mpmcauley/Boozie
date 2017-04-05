const error = require('./error');
const VariableDecl = require('./entities/VariableDecl');

const AnalysisContext = (parent) => {
  this.parent = parent;
  this.symbolTable = {};
};

AnalysisContext.initialContext = function () {
  return new AnalysisContext(null);
};

AnalysisContext.prototype.createChildContext = function () {
  return new AnalysisContext(this);
};

AnalysisContext.prototype.variableMustNotBeAlreadyDeclared = function (name) {
  if (this.symbolTable[name]) {
    return error(`Variable ${name} already declared`, name);
  }
};

AnalysisContext.prototype.addVariable = function (name, entity) {
  this.symbolTable[name] = entity;
};

AnalysisContext.prototype.lookupVariable = function (name) {
  const variable = this.symbolTable[name];
  if (variable) {
    return variable;
  } else if (!this.parent) {
    error(`Variable  + ${name} not found`, name);
    return VariableDecl.ARBITRARY;
  } else {
    return this.parent.lookupVariable(name);
  }
};

exports.initialContext = AnalysisContext.initialContext;
