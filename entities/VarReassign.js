class VarReassign {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }
  analyze(context) {
    this.id.analyze(context);
    this.value.analyze(context);
  }

  optimize() {
    this.id = this.id.optimize();
    this.value = this.value.optimize();
    return this;
  }// context.replace(this.id, this.value);
  // }
  // optimize() {
  //   return this;
  // }
  toString() {
    return (`(Reassign ${this.id} to ${this.value})`);
  }
}

module.exports = VarReassign;
