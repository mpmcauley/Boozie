class VariableDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "let " + this.id.join(" , ") + " = " + this.value.join(" , ");
  }
}

VariableDecl.prototype.analyze = (context) => {
  this.id.analyze(context);
  return context.addVariable(this.id, this);
}

module.exports = VariableDecl;
