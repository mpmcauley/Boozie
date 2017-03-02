// Anna is a poopy head - <3 Trixie
const ohm = require('ohm-js');
const fs = require('fs');
const grammar = ohm.grammar('Boozie {
    Program         = Block
    Block           = (Stmt "\n")*
    Stmt            = IfStmt
                    | ForStmt
                    | WhileStmt
                    | MatchStmt
                    | ReturnStmt
                    | VarDecl
                    | Exp
    IfStmt          = "if" BoolExp "{" Block "}"
                        ("else if" BoolExp "{" Block "}")* ("else" "{" Block "}" )?
    WhileStmt       = "while" BoolExp "{" Block "}"
    ForStmt         = "for" id "in" id "{" Block "}"
    MatchStmt       = "match" Exp "with" Exp
    ReturnStmt      = "return" Exp
    VarDecl         = ("let" | "set") id ("," id)* "=" Exp ("," Exp)*   -- simpledecl
                    | ("let" | "set") id "=" "[" Exp? ("," Exp)* "]"    -- arraydecl

    Exp             = Exp1 ("and" Exp)* | Exp1 ("or" Exp)*
    Exp1            = Exp 2 (relationalOp Exp2)?
    Exp2            = Exp3 (addOp Exp3)*
    Exp3            = Exp4 (mulOp Exp4)*
    Exp4            = "-"? Exp5
    Exp5            = Literal
                    | id
                    | "(" Exp ")"                       -- parens
    Literal         = floatlit
                    | boollit
                    | stringlit

    type            = "float" | "bool" | "string"
    boollit         = "true" | "false"
    floatlit        = digit+ ("." digit+)? (("E"|"e") ("+"|"-"))?
    stringlit       = "\"" char* "\""
    char            = escape | ~escape any
    escape          = "\"" | "\"" | "\r" | "\n" | "\/"
    keyword         = ("let"  | "set"   | "burp"  | "for"   | "in"
                    | "while" | "match" | "if"    | "else"  | "new"
                    | "true"  | "false" | "return") ~idrest
    id              = ~keyword letter idrest
    idrest          = "_" | alnum
    comment         = "//" (~"\n" any)* "\n"
    space          += comment

    assignOp        = "=" | "+=" | "*=" | "-=" | "/=" | "%="
    relationalOp    = "=="| ">"  | "<"  | ">=" | "<=" | "!="
    addOp           = "+" | "-"
    mulOp           = "*" | "/"  | "%"
}');

const semantics = grammar.createSemantics().addOperation('ast', {

  Program(body) {
    return new Program(body.ast);
  },
  Block(stmt, _) {
    return new Block(stmt.ast());
  },
  Stmt_if() {
    return new IfStatement();
  },
  Stmt_for() {
    return new ForStatement();
  },
  Stmt_while() {
    return new WhileStatement();
  },
  Stmt_match() {
    return new MatchStatement();
  },
  Stmt_return() {
    return new ReturnStatement();
  },
  Stmt_varDecl() {
    return new VariableDeclaration(id.sourceString);
  },
  Stmt_arrayDecl() {
    return new VariableDeclaration(id.sourceString);
  },
  Exp_binary(e1, _, e2) {
    return new BinaryExpression(e1.ast(), "or", e2.ast());
  },
  Exp_binary(e1, _, e2) {
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
