class VarReassign {
  constructor(id, value) {
     this.id = id;
     this.value = value;
  }
  analyze(context) {
    context.replace(this.id, this.value);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Reassign ${this.id} to ${this.value})`);
  }
}

module.exports = VarReassign;
