class ArrayConstDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    return (`set ${this.id.join(', ')} = [ ${this.value.join(', ')} ] `);
  }
}

module.exports = ArrayConstDecl;
