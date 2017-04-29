/*
 * Translation to JavaScript
 *
 * Requiring this module adds a gen() method to each of the AST classes.
 * Nothing is actually exported from this module.
 *
 * Generally, calling e.gen() where e is an expression node will return the
 * JavaScript translation as a string, while calling s.gen() where s is a
 * statement-level node will write its translation to standard output.
 *
 *   require('./backend/javascript-generator');
 *   program.gen();
 */

 const ArrayConstDecl = require('../entities/ArrayConstDecl');
 const ArrayVariableDecl = require('../entities/ArrayVariableDecl');
 const BinaryExpression = require('../entities/BinaryExpression');
 const Block = require('../entities/Block');
 const BooleanLiteral = require('../entities/BooleanLiteral');
 const ConstDecl = require('../entities/ConstDecl');
 const Context = require('../entities/Context');
 const ElseIfStatement = require('../entities/ElseIfStatement');
 const Expression = require('../entities/Expression');
 const FloatLiteral = require('../entities/FloatLiteral');
 const ForStatement = require('../entities/ForStatement');
 const FuncDecl = require('../entities/FuncDecl');
 const FunctionCall = require('../entities/FunctionCall');
 const IdExpression = require('../entities/IdExpression');
 const IfElseStatement = require('../entities/IfElseStatement');
 const IfStatement = require('../entities/IfStatement');
 const literal = require('../entities/literal');
 const Print = require('../entities/Print');
 const Program = require('../entities/program');
 const ReturnStatement = require('../entities/ReturnStatement');
 const Statement = require('../entities/Statement');
 const StringLiteral = require('../entities/StringLiteral');
 const Type = require('../entities/Type');
 const UnaryExpression = require('../entities/UnaryExpression');
 const VariableDecl = require('../entities/VariableDecl');
 const WhileStatement = require('../entities/WhileStatement');

 const error = require('../error');

 const indentPadding = 2;
 let indentLevel = 0;

 function emit(line) {
   console.log(`${' '.repeat(indentPadding * indentLevel)}${line}`);
 }

 function genStatementList(statements) {
   indentLevel += 1;
   statements.forEach(statement => statement.gen());
   indentLevel -= 1;
 }

// TODO - unary negation operator could clash with binary subtract if implemented this way
 function makeOp(op) {
   return op || { and: '&&', or: '||', '-': '!', '==': '===', '!=': '!==' }[op];
 }

 Object.assign(ArrayConstDecl.prototype, {
   gen() {
     const ids = this.id.map(i => i.gen());
     const values = this.value.map(v => v.gen());
     emit(`const [${ids}] = [${values}];`);
   },
 });

 Object.assign(ArrayVariableDecl.prototype, {
   gen() {
     const ids = this.id.map(i => i.gen());
     const values = this.value.map(v => v.gen());
     emit(`let [${ids}] = [${values}];`);
   },
 });

 Object.assign(BinaryExpression.prototype, {
   gen() { return `(${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()})`; },
 });

 Object.assign(Block.prototype, {
   gen() { this.statements.gen(); },
 });

 Object.assign(BooleanLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(ConstDecl.prototype, {
   gen() {
     const ids = this.id.map(i => i.gen());
     const values = this.value.map(v => v.gen());
     emit(`set [${ids}] = [${values}];`);
   },
 });

 Object.assign(ElseIfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit(`} else if (${this.elseCond}) {`);
     genStatementList(this.elseIf);
     emit('} else {');
     genStatementList(this.else);
     emit('}');     
   },
 });


 Object.assign(FloatLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(ForStatement.prototype, {
   gen() {
     emit(`for (${this.for} in ${this.in}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });

 Object.assign(FuncDecl.prototype, {
   gen() {
     emit(`let ${this.id} = (${this.params}) => {`);
     genStatementList(this.body);
     emit('}');
   },
 });

  Object.assign(FunctionCall.prototype, {
   gen() { emit(`${this.id}(${this.args});`); },
  });

  Object.assign(IfElseStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit('} else {');
     genStatementList(this.else);
     emit('}');
   },
 });

 Object.assign(IfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });

 Object.assign(Print.prototype, {
   gen() {
     emit(`console.log(${this.argument});`);
   },
 });

 Object.assign(Program.prototype, {
   gen() {
     // generateLibraryFunctions();
     this.statements.forEach(statement => statement.gen());
   },
 });

 Object.assign(ReturnStatement.prototype, {
   gen() {
     if (this.returnValue) {
       emit(`return ${this.returnValue.gen()};`);
     } else {
       emit('return;');
     }
   },
 });

 Object.assign(StringLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(UnaryExpression.prototype, {
   gen() { return `(${makeOp(this.op)} ${this.operand.gen()})`; },
 });

 Object.assign(VariableDecl.prototype, {
   gen() {
     const ids = this.id.map(i => i.gen());
     const values = this.value.map(v => v.gen());
     emit(`let [${ids}] = [${values}];`);
   },
 });

 Object.assign(WhileStatement.prototype, {
   gen() {
     emit(`while (${this.condition}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });
