class MatchPattern extends Statement {
  constuctor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  toString() {
    ">> " + this.p1 + " :: " + this.p2;
  }
}
