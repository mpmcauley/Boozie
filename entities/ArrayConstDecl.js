class ArrayConstDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "set " + this.id.join(" , ") + " = " + " [ " + this.value.join(" , ") + " ] ";
  }
}

module.exports = ArrayConstDecl;
