class FunctionObject {
  constructor(id, params, body) {
    // this.id = id;
    // this.params = params;
    // this.body = body;
    Object.assign(this, { id, params, body });
  }
  get isExternal() {
    return !this.function.body;
  }
  analyze(context) {
    console.log(this.params);
    this.params.forEach(p => p.analyze(context));
    this.requiredParameterNames = new Set();
    this.allParameterNames = new Set();
    this.params.forEach((p) => {
      this.allParameterNames.add(p.id);
      if (p.isRequired) {
        this.requiredParameterNames.add(p.id);
        if (this.requiredParameterNames.size < this.allParameterNames.size) {
          throw new Error('Required param cannot appear after an option param');
        }
      }
    });

    if (this.body) {
      this.body.forEach(s => s.analyze(context));
    }
    // context.declare(this.id, this);
    // const innerContext = new Context({ parent: context, inFunction: true });
    // this.params.forEach((p) => { innerContext.declare(p.id, p); });
    // this.body.analyze(innerContext);
    // context.add(this.function);
    // this.function.analyze(context.createChildContextForFunctionBody(this));
  }
  optimize() {
    this.parameters.forEach(p => p.optimize());
    this.body.forEach(s => s.optimize());
    this.body = this.body.filter(s => s !== null);
    return this;
  }

  toString() {
    return (`(Funcall ${this.id} ${this.params} ${this.body})`);
  }
}

module.exports = FunctionObject;
