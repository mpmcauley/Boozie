const Statement = require('../entities/Statement.js');
const Context = require('../entities/Context.js');

class FuncDecl extends Statement {
  constructor(sig, id, params, body) {
    super();
    this.sig = sig;
    this.id = id;
    this.params = params;
    // this.returnType = returnType;
    this.body = body;
  }
  analyze(context) {
    context.declare(this.id, this);
    const innerContext = new Context({ parent: context, inFunction: true });
    this.params.forEach((p) => { innerContext.declare(p.id, p); });
    this.body.analyze(innerContext);
  }
  optimize() {
    return this;
  }
  toString() {
    if (this.sig == "set") {
      return (`(ConstFuncDecl ${this.id} = ${this.params} => ${this.body})`);

    } else {
      return (`(FuncDecl ${this.id} = ${this.params} => ${this.body})`);
    }
  }
}

module.exports = FuncDecl;
