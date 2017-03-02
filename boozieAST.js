
const ohm = require('ohm-js');
const fs = require('fs');
const grammar = ohm.grammar();

class Program {
  constructor(e) {
    this.body = e;
  }
}

class Block {
  constuctor(body) {
    this.body = body;
  }
}

class Statement {
}

class IfStatement extends Statement {
  constructor(condition, body, elseIfStmt, elseStmt) {
    this.condition = condition;
    this.body = body;
    this.elseIf = elseIfStmt;
    this.else = elseStmt;
  }
  toString() {
    "if " + " { " + this.condition + " } " + " else " + " { " + this.body + " } ";
  }
}

class ElseIfStatement extends Statement {
  constructor(condition, body, elseIfStmt) {
    this.condition = condition;
    this.body = body;
    // this.elseIf = elseIfStmt;
  }
    toString() {
      "else if " + " { " + this.condition + " } " + " then " + " { " + this.body + " } ";
    }
}

class ForStatement extends Statement {
  constructor(identifier, structure, body) {
    this.for = identifier;
    this.in = structure;
    this.body = body;
  }
    toString() {
      "for " + this.for + " in " + this.in + " { " + this.body + " } ";
    }
}

class WhileStatement extends Statement {
  constructor(condition, body) {
    this.condition = condition;
    this.body = body;
  }
  toString() {
    "while " + this.condition + " { " + this.body + " } ";
  }
}

class MatchStatement extends Statement {
  constructor(e1, e2) {
    this.e1 = e1;
    this.e2 = e2;
  }
  toString() {
    "match " + this.e1 + " with " + this.e2;
  }
}

class ReturnStatement extends Statement {
  constructor(body) {
    this.body = body;
  }
  toString() {
    "return " + this.body;
  }
}

class VariableDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "let " + this.id.join(" , ") + " = " + this.value.join(" , ");
  }
}

class ArrayVariableDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "let " + this.id.join(" , ") + " = " + " [ " + this.value.join(" , ") + " ] ";
  }
}

class ConstDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "set " + this.id.join(" , ") + " = " + this.value.join(" , ");
  }
}

class ArrayConstDecl extends Statement {
  constructor(id, type, value){
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    "set " + this.id.join(" , ") + " = " + " [ " + this.value.join(" , ") + " ] ";
  }
}

class Expression {
}

class BinaryExpression extends Expression {
  constructor(e1, op, e2) {
    super();
    this.left = e1;
    this.op = op;
    this.right = e2;
  }
}

class UnaryExpression extends Expression {
  constructor(op, e) {
    super();
    this.op = op;
    this.operand = e;
  }
}

class IdExpression extends Expression {
  constructor(idValue) {
    super();
    this.value = idValue;
  }
}

class Literal {
}

class FloatLiteral extends Literal {
  constructor(float) {
    super();
    this.value = float;
  }
}

class BooleanLiteral extends Literal {
  constructor(bool) {
    super();
    this.value = bool;
  }
}

class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }
}



const semantics = grammar.createSemantics().addOperation('ast', {

  Program(body) {
    return new Program(body.ast);
  },
  Block(stmt, _) {
    return new Block(stmt.ast());
  },

//   Stmt_if() {
//     return new IfStatement();
//   },
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

  If_stmt(condition, body, elseIfStmt, elseStmt) {
    return new IfStatement(condition.ast(), body.ast(), elseIfStmt.ast(), elseStmt.ast());
  },

  // Not sure if this is correct
  For_stmt(identifier, structure, body) {
    return new ForStatement(identifier.ast(), structure.ast(), body.ast());
  },

  While_stmt(condition, body) {
    return new WhileStatement(condition.ast(), body.ast());
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
