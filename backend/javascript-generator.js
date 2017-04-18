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
 const FunDecl = require('../entities/FunDecl');
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

Object.assign(ArrayConstDecl.prototype, {
  gen() { return this.expression.gen(); },
});
