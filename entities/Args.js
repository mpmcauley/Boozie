class Args {
  constructor(args) {
    this.args = args;
  }
  analyze(context) {
    // this.args.analyze(context);
  }
  optimize() {
    this.args.optimize();
    return this;
  }
  toString() {
    return (`(Args ${this.args})`);
  }
}

module.exports = Args;
