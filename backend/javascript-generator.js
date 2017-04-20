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
 const MatchPattern = require('../entities/MatchPattern');
 const MatchStatement = require('../entities/MatchStatement');
 const Pattern = require('../entities/Pattern');
 const Print = require('../entities/Print');
 const program = require('../entities/program');
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

 Object.assign(BinaryExpression.prototype, {
   gen() { return `(${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()})`; },
 });

 Object.assign(BooleanLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(IfStatement.prototype, {
   gen() {
     emit(`if (${condition.gen()}) {`);
     genStatementList(body);
     emit('}');
   },
 });

 Object.assign(FloatLiteral.prototype, {
   gen() { return `${this.value}`; },
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
