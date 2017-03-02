class FloatLiteral extends Literal {
  constructor(float) {
    super();
    this.value = float;
  }
  toString() {
    this.value + ".0";
  }
}

module.exports = FloatLiteral;
