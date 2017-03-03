class Program {
  constructor(block) {
    this.body = block;
  }
  toString() {
    return (`(Program  ${this.body})`);
  }
}
module.exports = Program;
