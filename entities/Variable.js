class Variable {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  analyze(/* context */) { // eslint-disable-line class-methods-use-this
    // Someday we'll have types and we can do something here...
  }

  optimize() {
    return this;
  }
  toString() {
      return (`(${this.id} = ${this.value})`);
  }
};

module.exports = Variable;
