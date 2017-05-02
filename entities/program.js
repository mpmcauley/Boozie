const Context = require('../entities/Context.js');

class Program {
 constructor(block) {
   this.block = block;
 }
 analyze() {
   // this.body.analyze(Context.INITIAL_CONTEXT);
   const context = new Context({ parent: Context.INITIAL_CONTEXT });
   console.log(this.block);
     this.block.analyze(context);
  //  this.statements.forEach(s => s.analyze(context));
 }
 optimize() {
   this.block.map(s => s.optimize()).filter(s => s !== null);
   return this;
 }
 toString() {
   return (`(Program ${this.block})`);
 }
 // Program.prototype.analyze = (context) => {
 //   this.body.analyze(context);
 // }
}
module.exports = Program;
