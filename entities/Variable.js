class Variable {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  analyze(/* context */) { // eslint-disable-line class-methods-use-this
    this.referent = context.lookup(this.id);
    // if (!context.lookup(this.id)) {
    //   throw new Error(`${this.id} has not been declared`);
    // }
  }

  optimize() {
    return this;
  }
  toString() {
      return (`(Variable ${this.id} = ${this.value})`);
  }
};

module.exports = Variable;
