
const ohm = require('ohm-js');
const fs = require('fs');
const grammar = ohm.grammar();

class Program {
  constructor(e) {
    this.body = e;
  }
}

class Block {
  constuctor(stmt) {
    this.statement = stmt;
  }
}

class Statement {
}

class IfStatement extends Statement {
  constructor(ifStmt, body) {
    this.if = ifStmt;
    this.body = body;
  }
  return this.if + "else " + this.body;
}

// class ForStatement extends Statement {

// }

// class WhileStatement extends Statement {

// }

// class ReturnStatement extends Statement {

// }

// class VariableDeclaration extends Statement {

// }

// class IfStatement extends Statement {

// }

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
//   Stmt_for() {
//     return new ForStatement();
//   },
//   Stmt_while() {
//     return new WhileStatement();
//   },
//   Stmt_match() {
//     return new MatchStatement();
//   },
//   Stmt_return() {
//     return new ReturnStatement();
//   },
//   Stmt_varDecl() {
//     return new VariableDeclaration(id.sourceString);
//   },
//   Stmt_arrayDecl() {
//     return new VariableDeclaration(id.sourceString);
//   },
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
