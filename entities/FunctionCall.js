class FunctionCall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }
  toString() {
    return (`${this.id} (${this.args})`);
  }
}

module.exports = FunctionCall;
