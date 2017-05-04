class Literal {
  constructor(value) {
    this.value = value;
  }
  analyze() {
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(${this.value})`);
  }
}

module.exports = Literal;
