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
    return new Program(body.ast());
  },
  Block(stmt1, _1, stmt2) {
    return new Block(stmt1.ast(), stmt2.ast());
  },
  IfStmt(i, con1, brac1, block1, brac2, elsi, con2, brac3, block2, brac4, els, brac5, block3, brac6) {
    return new IfStatement(con1.ast(), block1.ast(), con2.ast(), block2.ast(), block3.ast());
  },
  // Stmt_ifelse(f, con, fl, b, fr, e, l, els, r) {
  //   return new IfElseStatement(con.ast(), b.ast(), els.ast());
  // },
  // Stmt_elseif(f, con, fl, b, fr, elif, elifcon, sl, elsifst, sr, els, l, el, r) {
  //   return new ElseIfStatement(con.ast(), b.ast(), elifcon.ast(), elsifst.ast(), el.ast());
  // },
  ForStmt(fr, e, i, struct, l, b, r) {
    return new ForStatement(e.ast(), struct.ast(), b.ast());
  },
  WhileStmt(w, e, l, b, r) {
    return new WhileStatement(e.ast(), b.ast());
  },
  MatchStmt(m, e1, w, _nl, matchpart) {
    return new MatchStatement(e1.ast(), matchpart.ast());
  },
  ReturnStmt(r, b) {
    return new ReturnStatement(b.ast());
  },
  VarDecl(l, id, comma, nextId, eq, v, comma2, nextv) {
    return new VariableDecl(v.sourceString, nextv.sourceString);
  },
  VarArrayDecl(l, id, eq, brac1, v, comma1, nextv, brac2) {
    return new ArrayVariableDecl(v.sourceString, nextv.sourceString);
  },
  ConstDecl(s, id, comma1, nextId, eq, v, comma2, nextv) {
    return new ConstDecl(v.sourceString, nextv.sourceString);
  },
  ConstArrayDecl(s, id, eq, brac1, v, comma1, nextv, brac2) {
    return new ArrayConstDecl(v.sourceString, nextv.sourceString);
  },
  Exp(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp1(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp2(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp3(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp4(op, e) {
    return new UnaryExpression('-', e.ast());
  },
  Exp5_parens(left, e, right) {
    return e.ast();
  },
  // little confused on these ones
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
// function parse(text) {
//   const match = grammar.match(text);
//   return semantics(match).ast();
// };
// module.exports = parse;
