// const Statement = require('../entities/Statement.js');
const FunctionObject = require('../entities/FunctionObject');
// const Context = require('../entities/Context.js');
class FuncDecl {
// class FuncDecl extends Statement {
  constructor(id, params, body) {
    // super();
    this.id = id;
    // this.params = params;
    // this.body = body;
    // this.returnType = returnType;
    this.function = new FunctionObject(id, params, body);
  }
  analyze(context) {
    context.add(this.function);
    this.function.analyze(context.createChildContextForFunctionBody(this));
    // context.declare(this.id, this);
    // const innerContext = new Context({ parent: context, inFunction: true });
    // this.params.forEach((p) => { innerContext.declare(p.id, p); });
    // this.body.analyze(innerContext);
    // context.add(this.function);
    // this.function.analyze(context.createChildContextForFunctionBody(this));
  }
  toString() {
    return (`(FuncDecl ${this.id} (${this.params}) ${this.body}`);
  }
}

module.exports = FuncDecl;
