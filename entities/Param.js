class Param {
  constructor(id) {
    this.id = id;
  }
  analyze(context) {
    // Nothing to analyze.
  }
  optimize() {
    return this;
  }
  toString() {
    return `${this.id}`;
  }
}

module.exports = Param;
