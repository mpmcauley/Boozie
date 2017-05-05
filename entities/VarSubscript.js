class VarSubscript {
  constructor(varExp, subscript) {
    this.varExp = varExp;
    this.subscript = subscript;
  }
  analyze(context) {
    this.subscript.analyze(context);
    this.varExp.analyze(context);
  }
  optimize() {
    this.subscript.optimize();
    this.varExp.optimize();
    return this;
  }
  toString() {
    return (`(${this.varExp} [${this.subscript}])`);
  }
}

module.exports = VarSubscript;
