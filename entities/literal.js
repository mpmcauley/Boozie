class Literal {
  constructor(value) {
    this.value = value;
  }

  // analyze(){
  // }
  toString() {
    return (`(Literal ${this.value})`);
  }
}

module.exports = Literal;
