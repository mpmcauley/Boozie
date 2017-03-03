const Program = require('./entities/Program.js');
const Block = require('./entities/Block.js');
const IfStatement = require('./entities/IfStatement.js');
const IfElseStatement = require('./entities/IfElseStatement.js');
const ElseIfStatement = require('./entities/ElseIfStatement.js');
const ForStatement = require('./entities/ForStatement.js');
const WhileStatement = require('./entities/WhileStatement.js');
const MatchStatement = require('./entities/MatchStatement.js');
const ReturnStatement = require('./entities/ReturnStatement.js');
const VariableDecl = require('./entities/VariableDecl.js');
const ConstDecl = require('./entities/ConstDecl.js');
const ArrayVariableDecl = require('./entities/ArrayVariableDecl.js');
const ArrayConstDecl = require('./entities/ArrayConstDecl.js');
const IdExpression = require('./entities/IdExpression.js');
const BinaryExpression = require('./entities/BinaryExpression.js');
const UnaryExpression = require('./entities/UnaryExpression.js');
const FloatLiteral = require('./entities/FloatLiteral.js');
const StringLiteral = require('./entities/StringLiteral.js');
const BooleanLiteral = require('./entities/BooleanLiteral.js');

const ohm = require('ohm-js');
const fs = require('fs');

const grammar = ohm.grammar(fs.readFileSync('./syntax.ohm'));

/* eslint-disable no-unused-vars */
const semantics = grammar.createSemantics().addOperation('ast', {

  Program(body) {
    return new Program(body.ast);
  },
  Block(stmt, _) {
    return new Block(stmt.ast());
  },
  Stmt_if(f, con, l, b, r) {
    return new IfStatement(con.ast(), b.ast());
  },
  Stmt_ifelse(f, con, fl, b, fr, e, l, els, r) {
    return new IfElseStatement(con.ast(), b.ast(), els.ast());
  },
  Stmt_elseif(f, con, fl, b, fr, elif, elifcon, sl, elsifst, sr, els, l, el, r) {
    return new ElseIfStatement(con.ast(), b.ast(), elifcon.ast(), elsifst.ast(), el.ast());
  },
  Stmt_for(fr, e, i, struct, l, b, r) {
    return new ForStatement(e.ast(), struct.ast(), b.ast());
  },
  Stmt_while(w, e, l, b, r) {
    return new WhileStatement(e.ast(), b.ast());
  },
  Stmt_match(m, e1, w, e2) {
    return new MatchStatement(e1.ast(), e2.ast());
  },
  Stmt_return(r, b) {
    return new ReturnStatement(b.ast());
  },
  Var_Decl(l, id, _, eq, v, x) {
    return new VariableDecl(v.sourceString);
  },
  Array_Decl(l, arr, _, eq, le, v, x, r) {
    return new ArrayVariableDecl(v.sourceString);
  },
  Const_Decl(s, id, _, eq, v, x) {
    return new ConstDecl(v.sourceString);
  },
  Array_ConstDecl(s, id, _, eq, l, v, x, r) {
    return new ArrayConstDecl(v.sourceString);
  },
  Exp_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp1_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp2_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp3_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp4_unary(op, e) {
    return new UnaryExpression('-', e.ast());
  },
  Exp5_parens(left, e, right) {
    return e.ast();
  },
  id(idValue) {
    return new IdExpression(this.sourceString);
  },
  floatlit(float) {
    return new FloatLiteral(this.sourceString);
  },
  boollit(bool) {
    return new BooleanLiteral(this.sourceString);
  },
  stringlit(string) {
    return new StringLiteral(this.sourceString);
  },
});
/* eslint-enable */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    throw match.message;
  }
  return semantics(match).ast();
};
