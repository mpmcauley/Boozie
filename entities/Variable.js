class Variable {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    // console.log(this.value);
  }

  analyze(context) { // eslint-disable-line class-methods-use-this
    this.id = context.lookup(this.id);
    // this.value = context.lookup(this.)
    // console.log(this.id.value);
    // Someday we'll have types and we can do something here...
  }

  optimize() {
    return this;
  }
  toString() {
    return (`(Variable ${this.id} = ${this.value})`);
  }
}

module.exports = Variable;
