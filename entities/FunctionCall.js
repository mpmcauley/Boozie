class FunctionCall {
  constructor(exp, args) {
    // super();
    this.exp = exp;
    this.args = args;
    Object.assign(this, { exp, args });
  }
  analyze(context) {
    this.exp.analyze(context);
    context.assertIsFunction(this.exp.id);
    this.checkArgumentMatching(this.exp.id);
    this.args.forEach(arg => arg.analyze(context));
  }

  checkArgumentMatching(exp) {
    let keywordArgumentSeen = false;
    const matchedParameterNames = new Set([]);
    this.args.forEach((arg, index) => {
      if (index >= exp.params.length) {
        throw new Error('Too many arguments in call');
      }
      if (arg.isKeywordArgument) {
        keywordArgumentSeen = true;
      } else if (keywordArgumentSeen) {
        throw new Error('Positional argument in call after keyword argument');
      }
      const parameterName = arg.id ? arg.id : exp.params[index].id;
      if (!exp.allParameterNames.has(parameterName)) {
        throw new Error(`Function does not have a parameter called ${parameterName}`);
      }
      if (matchedParameterNames.has(parameterName)) {
        throw new Error(`Multiple arguments for parameter ${parameterName}`);
      }
      matchedParameterNames.add(parameterName);
    });

    const miss = [...exp.requiredParameterNames].find(name => !matchedParameterNames.has(name));
    if (miss) {
      throw new Error(`Required parameter ${miss} is not matched in call`);
    }
  }
  optimize() {
    this.exp = this.exp.optimize();
    this.args.forEach(arg => arg.optimize());
    return this;
  }
  toString() {
    return (`(FunctionCall ${this.exp}${this.args})`);
  }
}

module.exports = FunctionCall;
