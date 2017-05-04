class FunctionCall {
  constructor(exp, args) {
    // super();
    this.exp = exp;
    this.args = args;
    // this.function = new FunctionCall(id, params, body);
  }
  analyze(context) {
    this.args.analyze(context);
    this.exp.analyze(context);
    // context.assertIsFunction(this.id.referent);
    // this.checkArgumentMatching(this.id.referent);
    // this.args.forEach(arg => arg.analyze(context));
  }

  checkArgumentMatching(id) {
    // let keywordArgumentSeen = false;
    // const matchedParameterNames = new Set([]);
    // this.args.forEach((arg, index) => {
    //   if (index >= id.params.length) {
    //     throw new Error('Too many arguments in call');
    //   }
    //   if (arg.isKeywordArgument) {
    //     keywordArgumentSeen = true;
    //   } else if (keywordArgumentSeen) {
    //     throw new Error('Positional argument in call after keyword argument');
    //   }
    //   const parameterName = arg.id ? arg.id : id.params[index].id;
    //   if (!id.allParameterNames.has(parameterName)) {
    //     throw new Error(`Function does not have a parameter called ${parameterName}`);
    //   }
    //   if (matchedParameterNames.has(parameterName)) {
    //     throw new Error(`Multiple arguments for parameter ${parameterName}`);
    //   }
    //   matchedParameterNames.add(parameterName);
    // });
    //
    // const miss = [...id.requiredParameterNames].find(name => !matchedParameterNames.has(name));
    // if (miss) {
    //   throw new Error(`Required parameter ${miss} is not matched in call`);
    // }
  }
    // this.requiredParameterNames = new Set();
    // this.allParameterNames = new Set();
    // this.params.forEach((p) => {
    //   this.allParameterNames.add(p.id);
    //   if (p.isRequired) {
    //     this.requiredParameterNames.add(p.id);
    //     if (this.requiredParameterNames.size < this.allParameterNames.size) {
    //       throw new Error('Required param cannot appear after an option param');
    //     }
    //   }
    // });
    //
    // if (this.body) {
    //   this.body.forEach(s => s.analyze(context));
    // }
    // if (!context.lookup(this.id)) {
    //   error(`Function ${this.id} has not been declared`);
    // }
    // this.function = context.lookup(this.id);
    // const numArgs = this.params.length;
    // const numParams = this.function.params.length;
    // if (numArgs !== numParams) {
    //   error(`Function ${numArgs} was called with ${numArgs} args but we expected ${numParams}`);
    // }

  optimize() {
    // this.exp = this.exp.optimize();
    // this.args.forEach(arg => arg.optimize());
    // return this;
  }

  // optimize() {
  //   this.parameters.forEach(p => p.optimize());
  //   this.body.forEach(s => s.optimize());
  //   this.body = this.body.filter(s => s !== null);
  //   return this;
  // }
  toString() {
    return (`(FunctionCall ${this.exp} ${this.args})`);
  }
}

module.exports = FunctionCall;
