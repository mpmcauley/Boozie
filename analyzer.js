let error = require('./error');

const AnalysisContext = (parent) => {
  this.parent = parent;
  this.symbolTable = {};
};

AnalysisContext.initialContext = () => {
  return new AnalysisContext(null);
};

AnalysisContext.prototype.createChildContext = () => {
  return new AnalysisContext(this);
};

AnalysisContext.prototype.addVariable = (name, entity) => {
  this.symbolTable[name] = entity;
};

AnalysisContext.prototype.lookupVariable = (name) => {
  let variable;
  variable = this.symbolTable[name];
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
