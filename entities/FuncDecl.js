
const FunctionObject = require('../entities/FunctionObject');

class FuncDecl {
  constructor(sig, id, params, body) {
    this.sig = sig;
    this.id = id;
    this.params = params;
    // this.returnType = returnType;
    this.body = body;
    this.function = new FunctionObject(id, params, body);
  }
  analyze(context) {
    context.addFunc(this.function);
    this.function.analyze(context.createChildContextForFunctionBody(this));
  }
  toString() {
    if (this.sig === 'set') {
      return (`(ConstFuncDecl ${this.id} = ${this.params} => ${this.body})`);
    } else {
      return (`(FuncDecl ${this.id} = ${this.params} => ${this.body})`);
    }
  }
}

module.exports = FuncDecl;
