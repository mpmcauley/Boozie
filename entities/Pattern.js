class Pattern extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }
  toString() {
    return (this.value);
  }
}

module.exports = Pattern;
