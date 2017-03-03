
const ohm = require('ohm-js');
const fs = require('fs');
const grammar = ohm.grammar(fs.readFileSync './syntax.ohm');

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
    return new IfStatement(con.ast(), b.ast(), el.ast());
  },
  Stmt_elseif(f, con, fl, b, fr, elif, elifcon, sl, elsifst, sr, els, l, el, r) {
    return new IfStatement(con.ast(), b.ast(), elifcon.ast(), elsifst.ast(), el.ast());
  },
  Stmt_for(fr, e, i, struct, l, b, r) {
    return new ForStatement(e.ast(), struct.ast(), b.ast();
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
  Var_Decl(l, id, _, eq, v, _) {
    return new VariableDecl(v.sourceString);
  },
  Array_Decl(l, arr,  _, eq, l, v, _, r) {
    return new ArrayVariableDecl(v.sourceString);
  },
  Const_Decl(s, id, _, eq, v, _) {
    return new ConstDecl(v.sourceString);
  },
  Array_ConstDecl(s, id, _, eq, l, v, _, r) {
    return new ArrayConstDecl(v.sourceString);
  },
  Exp_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), "or", e2.ast());
  },
  Exp_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), "and", e2.ast());
  },
  Exp1_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp2_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(), op.sourceString, e2.ast());
  },
  Exp3_binary(e1, op, e2) {
    return new BinaryExpression(e1.ast(),op.sourceString, e2.ast());
  },
  Exp4_unary(op, e) {
    return new UnaryExpression("-", e.ast());
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
  }
});

module.exports = parse = function(text) {
  var match;
  match = grammar.match(text);
  if (!match.succeeded()) {
    throw match.message;
  }
  return semantics(match).ast();
};
