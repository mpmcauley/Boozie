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
 // const ArrayConstDecl = require('../entities/ArrayConstDecl');
 // const ArrayVariableDecl = require('../entities/ArrayVariableDecl');
 const Args = require('../entities/Args');
 const AssignmentStatement = require('../entities/AssignmentStatement');
 const BinaryExpression = require('../entities/BinaryExpression');
 const Block = require('../entities/Block');
 const BooleanLiteral = require('../entities/BooleanLiteral');
 const BoozieArray = require('../entities/BoozieArray');
 // const ConstDecl = require('../entities/ConstDecl');
 const Context = require('../entities/Context');
 const ElseIfStatement = require('../entities/ElseIfStatement');
 const Expression = require('../entities/Expression');
 const FloatLiteral = require('../entities/FloatLiteral');
 const ForStatement = require('../entities/ForStatement');
 const FuncDecl = require('../entities/FuncDecl');
 const FunctionCall = require('../entities/FunctionCall');
 const FunctionObject = require('../entities/FunctionObject');
 const IdExpression = require('../entities/IdExpression');
 const IfElseStatement = require('../entities/IfElseStatement');
 const IfElseIfStatement = require('../entities/IfElseIfStatement');
 const IfStatement = require('../entities/IfStatement');
 const Literal = require('../entities/Literal');
 const Print = require('../entities/Print');
 const Param = require('../entities/Param');
 const Params = require('../entities/Params');
 const Program = require('../entities/Program');
 const ReturnStatement = require('../entities/ReturnStatement');
 const Statement = require('../entities/Statement');
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
  //  console.log("hello");
   console.log(`${' '.repeat(indentPadding * indentLevel)}${line}`);
 }

 function genStatementList(statements) {
   indentLevel += 1;
  //  console.log("Statement: ", util.inspect(statements, { depth : null }));
   statements.forEach(statement => {statement.gen(); });
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

 // Object.assign(ArrayConstDecl.prototype, {
 //   gen() {
 //     const ids = this.id.map(i => i.gen());
 //     const values = this.value.map(v => v.gen());
 //     emit(`const [${ids}] = [${values}];`);
 //   },
 // });

 // Object.assign(ArrayVariableDecl.prototype, {
 //   gen() {
 //     const ids = this.id.map(i => i.gen());
 //     const values = this.value.map(v => v.gen());
 //     emit(`let [${ids}] = [${values}];`);
 //   },
 // });

 Object.assign(BinaryExpression.prototype, {
   gen() { return `(${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()})`; },
 });

 Object.assign(Block.prototype, {
   gen() {
    //  console.log(this.statements.toString());
     genStatementList(this.statements);
    //  this.statements.gen();
    //  this.statements.forEach(s => s.gen());
   },
 });

 Object.assign(BooleanLiteral.prototype, {
   gen() { return `${this.value}`; },
 });
 // Object.assign(ConstDecl.prototype, {
 //   gen() {
 //     const ids = this.id.map(i => i.gen());
 //     const values = this.value.map(v => v.gen());
 //     emit(`set [${ids}] = [${values}];`);
 //   },
 // });

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
     emit(`for (${this.for} in ${this.in}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });

 Object.assign(FuncDecl.prototype, {
   gen() {
     return this.function.gen();
    //  emit(`let ${this.id} = (${this.params}) => {`);
    //  genStatementList(this.body);
    //  emit('}');
   },
 });

 Object.assign(FunctionCall.prototype, {
   gen() {
     const fun = this.exp.referent;
     const args = {};
     const params = Array(this.params.length).fill(undefined);
     fun.args.forEach((a, i) => { args[a.id] = i; });
     this.params.forEach((p,i) => { params[p.isPositionalArgument ? i : args[p.id]] = p; });
     return `${jsName(fun)}(${params.map(p => (p ? p.gen() : 'undefined')).join(', ')})`;
    //  emit(`${this.id}(${this.args});`);
   },
 });

 Object.assign(IfElseStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit('} else {');
     genStatementList(this.else);
     emit('}');
   },
 });

 Object.assign(IfStatement.prototype, {
   gen() {
     emit(`if (${this.condition.gen()}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });

 Object.assign(IdExpression.prototype, {
   gen() { return `${this.id}`; },
 });

 Object.assign(Print.prototype, {
   gen() {
     emit(`console.log(${this.argument});`);
   },
 });

 Object.assign(Program.prototype, {
   gen() {
     generateLibraryFunctions();
    //  for (let e = 0; e < this.statements.length; e++) {
    //    e.gen();
    //   }
    // console.log(this.statements);
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
   gen() { return `${this.value}`; },
 });


 Object.assign(UnaryExpression.prototype, {
   gen() { return `(${makeOp(this.op)} ${this.operand.gen()})`; },
 });

 Object.assign(VariableDecl.prototype, {
   gen() {
     const ids = this.ids.map(i => i.gen());
     const values = this.initializers.map(v => v.gen());
     if (this.signifier === "let") {
       emit(`let [${ids}] = [${values}];`);
     }
   },
 });
 Object.assign(Variable.prototype, {
   gen() {
     const ids = this.id.gen();
     const values = this.value.gen();
     emit(`${ids} = ${values}`);
   },
 });

 Object.assign(WhileStatement.prototype, {
   gen() {
     emit(`while (${this.condition}) {`);
     genStatementList(this.body);
     emit('}');
   },
 });
