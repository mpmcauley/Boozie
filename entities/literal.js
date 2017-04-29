class Literal {
  constructor(value) {
    this.value = value;
  }
  // analyze() {
  // }
  optimize() {
    return this;
  }
  toString() {
    return (`(Literal ${this.value})`);
  }
}

module.exports = Literal;
