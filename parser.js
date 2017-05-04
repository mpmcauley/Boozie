const Program = require('./entities/Program.js');
const Block = require('./entities/Block.js');
const Statement = require('./entities/Statement.js');
const IfStatement = require('./entities/IfStatement.js');
const IfElseStatement = require('./entities/IfElseStatement.js');
const IfElseIfStatement = require('./entities/IfElseIfStatement.js');
const ElseIfStatement = require('./entities/ElseIfStatement.js');
const ForStatement = require('./entities/ForStatement.js');
const WhileStatement = require('./entities/WhileStatement.js');
const PrintStatement = require('./entities/Print.js');
const ReturnStatement = require('./entities/ReturnStatement.js');
const VariableDecl = require('./entities/VariableDecl.js');
const DeclaredVariable = require('./entities/DeclaredVariable.js');
const BoozieArray = require('./entities/BoozieArray.js');
const FuncDecl = require('./entities/FuncDecl.js');
const Params = require('./entities/Params.js');
const Param = require('./entities/Param.js');
const VarReassign = require('./entities/VarReassign.js');
const FunctionCall = require('./entities/FunctionCall');
const Args = require('./entities/Args.js');
const VarSubscript = require('./entities/VarSubscript.js');
// const ConstDecl = require('./entities/ConstDecl.js');
// const ArrayVariableDecl = require('./entities/ArrayVariableDecl.js');
// const ArrayConstDecl = require('./entities/ArrayConstDecl.js');
const IdExpression = require('./entities/IdExpression.js');
const AssignmentStatement = require('./entities/AssignmentStatement.js');
const BinaryExpression = require('./entities/BinaryExpression.js');
const UnaryExpression = require('./entities/UnaryExpression.js');
const Literal = require('./entities/Literal.js');
const FloatLiteral = require('./entities/FloatLiteral.js');
const StringLiteral = require('./entities/StringLiteral.js');
const BooleanLiteral = require('./entities/BooleanLiteral.js');
const Print = require('./entities/Print.js');
const Var = require('./entities/Variable.js');


const ohm = require('ohm-js');
const fs = require('fs');

const grammar = ohm.grammar(fs.readFileSync('./syntax.ohm'));

/* eslint-disable no-unused-vars */
const semantics = grammar.createSemantics().addOperation('ast', {

  Program(body) {
    return new Program(body.ast());
  },
  Block(stmt1) {
    return new Block(stmt1.ast());
  },
  Stmt(body) {
    return new Statement(body.ast());
  },
  IfStmt_ifelsifelse(i, con1, brac1, block1, brac2, elsi, con2, brac3, block2, brac4, els, brac5, block3, brac6) {
    return new ElseIfStatement(con1.ast(), block1.ast(), con2.ast(), block2.ast(), block3.ast());
  },
  IfStmt_ifelsif(i, con1, brac1, block1, brac2, elsi, con2, brac3, block2, brac4) {
    return new IfElseIfStatement(con1.ast(), block1.ast(), con2.ast(), block2.ast());
  },
  IfStmt_ifelse(i, con1, brac1, block1, brac2, els, brac3, block2, brac4) {
    return new IfElseStatement(con1.ast(), block1.ast(), block2.ast());
  },
  IfStmt_simpleif(i, con, brac1, block, brac2) {
    return new IfStatement(con.ast(), block.ast());
  },
  // Stmt_assign(idExp, assignOp, exp) {
  //   return new AssignmentStatement(idExp.ast(), assignOp.sourceString, exp.ast());
  // },
  FunDecl_func(sig, id, eq, params, arrow, br1, block, br2) {
    return new FuncDecl(sig.sourceString, id.ast(), params.ast(), block.ast())
  },
  Params(l, param, comma, rest, r) {
    return new Params(param.ast(), rest.ast());
  },
  Param(param) {
    return new Param(param.ast());
  },
  ForStmt(fr, e, i, struct, l, b, r) {
    return new ForStatement(e.ast(), struct.ast(), b.ast());
  },
  WhileStmt(w, e, l, b, r) {
    return new WhileStatement(e.ast(), b.ast());
  },
  Print(b, lp, arg, rp) {
    return new Print(arg.ast());
  },
  ReturnStmt(r, b) {
    return new ReturnStatement(b.ast());
  },
  VarDecl_decl(sig, ids, eq, values) {
    return new VariableDecl(sig.sourceString, ids.ast(), values.ast());
  },
  // VarArrayDecl_arrdecl(l, id, eq, arr) {
  //   return new VariableDecl(id.ast(), arr.ast());
  // },
  // ConstDecl(s, id, comma1, nextId, eq, v, comma2, nextv) {
  //   return new ConstDecl(v.sourceString, nextv.sourceString);
  // },
  // ConstArrayDecl(s, id, eq, brac1, v, comma1, nextv, brac2) {
  //   return new ArrayConstDecl(v.sourceString, nextv.sourceString);
  // },
  Exp_or(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp_and(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp1_reassign(old, eq, _new) {
    return new VarReassign(old.sourceString, _new.ast());
  },
  Exp1_relop(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp2_addop(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp3_mulop(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp4_negop(op, e) {
    return new UnaryExpression(op.sourceString, e.ast());
  },
  Exp5_parens(left, e, right) {
    return e.ast();
  },
  Exp5_array(left, array, right) {
    return new BoozieArray(array.ast());
  },
  Exp5_funcall(varExp, args) {
    return new FunctionCall(varExp.ast(), args.ast());
  },
  VarExp_subscript(varExp, l, exp, r) {
    return new VarSubscript(varExp.ast(), exp.ast());
  },
  Args_ids(l, ids, r) {
    return new Args(ids.ast());
  },
  NonemptyListOf(first, _, rest) { return [first.ast()].concat(rest.ast()); },
  // little confused on these ones
  id(idValue) {
    return (this.sourceString);
  },
  // IdExp(id) {
  //   return new IdExpression(this.sourceString);
  // },
  floatlit(float) {
    return new FloatLiteral(this.sourceString);
  },
  boollit(bool) {
    return new BooleanLiteral(this.sourceString);
  },
  stringlit(string) {
    return new StringLiteral(this.sourceString);
  },
  _terminal() {
    return (this.sourceString);
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
