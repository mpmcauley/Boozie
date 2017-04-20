const Statement = require('../entities/Statement.js');
const Context = require('../entities/Context.js');

class FuncDecl extends Statement {
  constructor(id, params, returnType, body) {
    super();
    this.id = id;
    this.params = params;
    this.returnType = returnType;
    this.body = body;
  }
  analyze(context) {
    context.declare(this.id, this);
    const innerContext = new Context({ parent: context, inFunction: true });
    this.params.forEach((p) => { innerContext.declare(p.id, p); });
    this.body.analyze(innerContext);
  }
  toString() {
    return (`(FuncDecl let ${this.id} = ${this.args})`);
  }
}

module.exports = FuncDecl;
