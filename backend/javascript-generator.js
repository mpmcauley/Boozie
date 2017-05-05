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
 const Args = require('../entities/Args');
 const AssignmentStatement = require('../entities/AssignmentStatement');
 const BinaryExpression = require('../entities/BinaryExpression');
 const Block = require('../entities/Block');
 const BooleanLiteral = require('../entities/BooleanLiteral');
 const BoozieArray = require('../entities/BoozieArray');
 const Context = require('../entities/Context');
 const ElseIfStatement = require('../entities/ElseIfStatement');
 const FloatLiteral = require('../entities/FloatLiteral');
 const ForStatement = require('../entities/ForStatement');
 const FuncDecl = require('../entities/FuncDecl');
 const FunctionCall = require('../entities/FunctionCall');
 const FunctionObject = require('../entities/FunctionObject');
 const IdExpression = require('../entities/IdExpression');
 const IfElseStatement = require('../entities/IfElseStatement');
 const IfElseIfStatement = require('../entities/IfElseIfStatement');
 const IfStatement = require('../entities/IfStatement');
 const Print = require('../entities/Print');
 const Param = require('../entities/Param');
 const Params = require('../entities/Params');
 const Program = require('../entities/Program');
 const ReturnStatement = require('../entities/ReturnStatement');
 const StringLiteral = require('../entities/StringLiteral');
 // const Type = require('../entities/Type');
 const UnaryExpression = require('../entities/UnaryExpression');
 const VariableDecl = require('../entities/VariableDecl');
 const VarSubscript = require('../entities/VarSubscript');
 const Variable = require('../entities/Variable');
 const WhileStatement = require('../entities/WhileStatement');
 const VarReassign = require('../entities/VarReassign');

 const util = require('util');

 const indentPadding = 2;
 let indentLevel = 0;

 function emit(line) {
   console.log(`${' '.repeat(indentPadding * indentLevel)}${line}`);
 }

 function genStatementList(statements) {
   indentLevel += 1;
   console.log("STATEMENT: ", util.inspect(statements, { depth : null }));
   statements.forEach(statement => { statement.gen(); });
   indentLevel -= 1;
 }

 const jsName = (() => {
   let lastId = 0;
   const map = new Map();
   return (v) => {
     if (!(map.has(v))) {
       map.set(v, ++lastId); // eslint-disable-line no-plusplus
     }
     return `${v.id}_${map.get(v)}`;
   };
 })();

 // function bracketIfNecessary(a) {
 //   if (a.length === 1) {
 //     return `${a}`;
 //   }
 //   return `[${a.join(', ')}]`;
 // }


 function generateLibraryFunctions() {
   function generateLibraryStub(name, params, body) {
     const entity = Context.INITIAL.localVariables[name];
     emit(`function ${jsName(entity)}(${params}) {${body}}`);
   }
 }

// TODO - unary negation operator could clash with binary subtract if implemented this way
 function makeOp(op) {
   return op || { and: '&&', or: '||', '-': '!', '==': '===', '!=': '!==' }[op];
 }

 Object.assign(Args.prototype, {
   gen() { return this.args.gen(); },
 });

 Object.assign(AssignmentStatement.prototype, {
   gen() {
     emit(`${(this.left)} = ${(this.right)}}`);
   },
 });

 Object.assign(BinaryExpression.prototype, {
   gen() {
     console.log('LEFT', this.left);
     return `(${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()})`;
   },
 });

 Object.assign(Block.prototype, {
   gen() {
     genStatementList(this.statements);
   },
 });

 Object.assign(BooleanLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(BoozieArray.prototype, {
   gen() { return `${this.values}`; },
 });

 Object.assign(ElseIfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit(`} else if (${this.elseCond}) {`);
     genStatementList(this.elseIf);
     emit('} else {');
     genStatementList(this.else);
     emit('}');
   },
 });


 Object.assign(FloatLiteral.prototype, {
   gen() { return `${this.value}`; },
 });

 Object.assign(ForStatement.prototype, {
   gen() {
     emit(`for (${this.Identitier} in ${this.structure}) {`);
     genStatementList(this.body.statements);
     emit('}');
   },
 });

 Object.assign(FuncDecl.prototype, {
   gen() {
     return this.function.gen();
   },
 });

 Object.assign(FunctionCall.prototype, {
   gen() {
     const fun = this.exp.id;
     const params = {};
     const args = Array(this.args.length).fill(undefined);
     fun.params.forEach((p, i) => { params[p.id] = i; });
     this.args.forEach((a, i) => { args[a.isPositionalArgument ? i : params[a.id]] = a; });
     return `${jsName(fun)}(${args.map(a => (a ? a.gen() : 'undefined')).join(', ')})`;
   },
 });

 Object.assign(FunctionObject.prototype, {
   gen() {
     emit(`function ${jsName(this)}(${this.params.gen()}) {`);
     genStatementList(this.body.statements);
     emit('}');
   },
 });

 Object.assign(IfElseStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body.statements);
     emit('} else {');
     genStatementList(this.elseStmt.statements);
     emit('}');
   },
 });

 Object.assign(IfElseIfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body.statements);
     emit(`} else if (${this.elseIfCond}) {`);
     genStatementList(this.elseStmt.statements);
     emit('} else {');
     genStatementList(this.else);
     emit('}');
   },
 });

 Object.assign(IfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     console.log('IF STATEMENT:', this.condition);
     genStatementList(this.body.statements);
     emit('}');
   },
 });

 Object.assign(IdExpression.prototype, {
   gen() {
     console.log('IDEXP:', this.id);
     return this.id;
   },
 });

 Object.assign(Param.prototype, {
   gen() { return this.id.gen(); },
 });

 Object.assign(Params.prototype, {
   gen() { return this.params.map(p => p.gen()).join(' ,'); },
 });

 Object.assign(Print.prototype, {
   gen() {
     console.log('CONSOLE LOG', this.body);
     emit(`console.log(${this.body.gen()});`);
   },
 });

 Object.assign(Program.prototype, {
   gen() {
     generateLibraryFunctions();
     this.block.gen();
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
   gen() {
     console.log('STRINGLIT', this.value);
     return `${this.value}`;
   },
 });


 Object.assign(UnaryExpression.prototype, {
   gen() { return `(${makeOp(this.op)} ${this.operand.gen()})`; },
 });

 Object.assign(VariableDecl.prototype, {
   gen() {
     const vars = this.ids.map(i => i.gen());
     const values = this.initializers.map(v => v.gen());
     if (this.signifier === "let") {
       emit(`let [${vars}] = [${values}];`);
     }
   },
 });
 Object.assign(Variable.prototype, {
   gen() {
     console.log('VARS:', this.ids);
     const ids = this.id.gen();
     const values = this.value.gen();
     emit(`${ids} = ${values}`);
   },
 });

 Object.assign(VarReassign.prototype, {
   gen() {
     emit(`${(this.id)} = ${(this.value)}`);
   },
 });

 Object.assign(VarSubscript.prototype, {
   gen() {
     emit(`(${this.varExp} [${this.subscript}]);`);
   },
 });


 Object.assign(WhileStatement.prototype, {
   gen() {
     emit(`while (${this.condition.gen()}) {`);
     genStatementList(this.body.statements);
     emit('}');
   },
 });
