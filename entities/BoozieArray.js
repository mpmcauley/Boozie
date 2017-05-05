class BoozieArray {
  constructor(values) {
    this.values = values;
  }

  analyze(/* context */) { // eslint-disable-line class-methods-use-this
    // Someday we'll have types and we can do something here...
  }

  optimize() {
    return this;
  }
  toString() {
    return (`(BoozieArray ${this.values})`);
  }
}

module.exports = BoozieArray;
