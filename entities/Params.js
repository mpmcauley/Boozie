class Params {
  constructor(pOne, restParams) {
    this.params = pOne.concat((restParams.length > 0) ? restParams[0] : restParams);
  }
  optimize() {
    return this;
  }
  toString() {
    if (this.params.length === 0) {
      return `(Parameters ${this.params})`;
    }
    return `(Parameters ${this.params.join(',')})`;
  }
}

module.exports = Params;
