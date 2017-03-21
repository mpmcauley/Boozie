class Program {
  constructor(block) {
    this.body = block;
  }
  toString() {
    return (`(Program  ${this.body})`);
  }
  Program.prototype.analyze = (context) => {
    this.body.analyze(context);
  }
}
module.exports = Program;
