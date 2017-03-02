class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }
  toString() {
    "' " +  this.value + " '";
  }
}

module.exports = StringLiteral;
