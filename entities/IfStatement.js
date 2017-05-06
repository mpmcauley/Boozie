 const Statement = require('../entities/Statement.js');
 const Block = require('../entities/Block.js');
 const ReturnStatement = require('../entities/ReturnStatement.js');

 class IfStatement extends Statement {
   constructor(condition, body) {
     super();
     this.condition = condition;
     this.body = body;
   }
   analyze(context) {
     this.condition.analyze(context);
    // this.condition.type.mustBeBoolean('Condition in "else if" statement must be boolean');
     this.body.analyze(context);
    // if (this.elseIf) {
    //   return this.elseIf.analyze(context);
    // }
   }
   optimize() {
     if (this.condition === false) {
       return null;
     }
     const optimizedBody = [];

     for (let i = 0; i < this.body.statements.length; i += 1) {
       if (this.body.statements[i] instanceof ReturnStatement) {
         optimizedBody.push(this.body.statements[i]);
         this.body = new Block(optimizedBody);
         return this;
       }
       optimizedBody.push(this.body.statements[i]);
     }
     return this;
   }
   toString() {
     return (`(IfStatement if ${this.condition} { ${this.body} } )`);
   }
}

 module.exports = IfStatement;

// TODO create all else if's etc.. don't need the other ones
// class IfStatement {
//   constructor(cases, alternate) {
//     Object.assign(this, { cases, alternate });
//   }
//
//   analyze(context) {
//     this.cases.forEach(c => c.analyze(context.createChildContextForBlock()));
//     if (this.alternate) {
//       this.alternate.forEach(s => s.analyze(context.createChildContextForBlock()));
//     }
//   }
//
//   optimize() {
//     this.cases.map(s => s.optimize()).filter(s => s !== null);
//     this.alternate = this.alternate ? this.alternate.optimize() : null;
//     return this;
//   }
// };
