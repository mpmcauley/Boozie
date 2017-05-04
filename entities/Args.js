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
    // console.log(this.args)
    return (`(Args ${this.args})`);
  }
  // Block.prototype.analyze = (context) => {
  //   localContext = context.createChildContext();
  //   for statements in this.body {
  //     this.body.analyze(localContext);
  //   }
  // }
}

module.exports = Args;
