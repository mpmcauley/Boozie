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

module.exports = VariableDecl;
