class BooleanLiteral extends Literal {
  constructor(bool) {
    super();
    this.value = bool;
  }
  toString() {
    return (this.value);
  }
}

module.exports = BooleanLiteral;
