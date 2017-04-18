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

 const Context = require('../entities/Context');
 const program = require('../entities/program');
 const Block = require('../entities/Block');
 const Type = require('../entities/Type');
 const Statement = require('../entities/Statement');
 const IfStatement = require('../entities/IfStatement');
 const IfElseStatement = require('../entities/IfElseStatement');
 const ElseIfStatement = require('../entities/ElseIfStatement');
 const WhileStatement = require('../entities/WhileStatement');
 const ForStatement = require('../entities/ForStatement');
 const Print = require('../entities/Print');
 const MatchStatement = require('../entities/MatchStatement');
 const Pattern = require('../entities/Pattern');
 const MatchPattern = require('../entities/MatchPattern');
 const ReturnStatement = require('../entities/ReturnStatement');
 const VariableDecl = require('../entities/VariableDecl');
 const ConstDecl = require('../entities/ConstDecl');
 const ArrayVariableDecl = require('../entities/ArrayVariableDecl');
 const ArrayConstDecl = require('../entities/ArrayConstDecl');
 const Expression = require('../entities/Expression');
 const IdExpression = require('../entities/IdExpression');
 const UnaryExpression = require('../entities/UnaryExpression');
 const BinaryExpression = require('../entities/BinaryExpression');
 const FunDecl = require('../entities/FunDecl');
 const FunctionCall = require('../entities/FunctionCall');
 const literal = require('../entities/literal');
 const BooleanLiteral = require('../entities/BooleanLiteral');
 const FloatLiteral = require('../entities/FloatLiteral');
 const StringLiteral = require('../entities/StringLiteral');

