class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }
  toString() {
    "' " +  this.value + " '";
  }
}

StringLiteral.prototype.analyze = (context) => {
  this.type = Type.STRLIT;
}

module.exports = StringLiteral;
