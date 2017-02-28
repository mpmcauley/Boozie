# Boozie

!["logo"](BoozieLogo.png)

The ideal programming language for pursuing the Ballmer Peak. Compiles to JavaScript.

## Summary

There exists a legend in the world of programming known as the Ballmer Peak. This fabled phenomenon grants a significant "level-up" with respect to coding abilities at a particular range of blood alcohol content (BAC). Yet this territory of productivity is elusive, operating at a very narrow range of BAC values.

There's a relevant [xkcd](https://xkcd.com/) for this:

![Apple uses automated schnapps IVs.](ballmer_peak.png)

Our language is designed with this phenomenon in mind, to help facilitate programmers who wish to pursue this unicorn, by making it easy for even the most inebriated of coders to work efficiently!

## List of Features

- Pattern Matching (OCaml style)
- First-class functions
- Static typing, static scoping
- String interpolation
- Curly braces for closure
- instead of semicolons, just hit enter!
- for each loops
- all numbers are floats - lol

## Example Programs

Here are some examples, Boozie on the left, JavaScript on the right.

### "Hello World" Example
  - No printing in Boozie.... no, no, no! You *belch!*

```
burp("WAZZZZZAAAHHHHHP World!")                     console.log("Hello World!");
```

### Data Types and Built-ins
  - Boozie supports the typical assortment of built-in data types:
      * Booleans (`true`, `false`)
      * String literals (anything contained within matching pairs of ASCII single ('), double ("), or back (\`) quotes)
      * Number literals (IEEE 754 double-precision floating point)
  - Thus, one important takeaway: all numbers in Boozie are floats!

  All ordinary arithmetic (`+`, `-`, `*`, `/`, and `%`) and relational (`<`, `<=`, `>`, `>=`, `==`, `!=`) operators are supported, and Boolean comparisons are made with the intuitive phrases `and` and `or`. Relational operators are non-associative. Equivalency (`==`) is defined as JavaScript's "strict," triple-equals (`===`) equivalence. Why should programmers have to worry about the subtle differences between the interpretation of the two in the first place when, 9 times out of 10, `===` is what they mean?

  ```
  (null) == (undefined)                             (null) === (undefined);
  // false                                          // false
  ```

### Variable Assignment
  - For variable assignment, the types are inferred. Quick and easy! You can also perform multiple variable assignment without all the nasty brackets.

```
let volume = 16                                     let volume = 16.0;
let beer, fruit = "Blue Moon", "orange"             let [beer, fruit] = ["Blue Moon", "orange"];                  
```
  - Constants (with the same behavior as JavaScript) are supported with the `set` keyword, for terseness, muscle-memory convenience (all letters on one hand!), and consistency with `let`.

```
set cup = "Stein"                                   const CUP = "Stein";
set capacity = 16.9                                 const CAPACITY = 16.9;
```

  - Arrays are declared and assigned in the same way, with the same static type inference.

```
let pairsWellWithBeer = ["pizza", "burgers"]        let pairsWellWithBeer = ["pizza", "burgers"];

set sixpack = [1, 2, 3, 4, 5, 6]                    const SIXPACK = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];
```

  - Similar to JavaScript and many other languages, variable names _must_ begin with a letter, and may not be one of the list of Boozie Reserved Words (see below), but may include any alphanumeric characters or underscore after the initial character.

```
let brewery = "open"                                let brewery = "open";
// Okay!                                            // Okay!

let 12ozBottle = 12                                 let 12ozBottle = 12.0;
Syntax error                                        Syntax error

let for = false                                     let for = false;
Syntax error                                        Syntax error
```

### Loop & Conditional Statements
  - Boozie supports two types of control-flow loop statements: `for`, with a similar "for-each" syntax to Python (no messy loop arithmetic rooted in C!), and `while`. Conditional control-flow statements are of the typical form 'if-then,' followed by any number of optional `else if` clauses and only one optional `else`. No need to worry about matching (and potentially forgetting) parens, because there aren't any!

#### For
```
for brand in allBrands {                            for(let brand of allBrands) {
  burp(brand)                                         console.log(brand);
}                                                     brand += 1;
                                                    };
```

#### While
```
while beer = -empty {                               while (beer = !empty) {
    drink(beer)                                         drink(beer);
}                                                   };
```
Note that booleans are negated with the intuitive `-` rather than an arbitrary operator or keyword that requires multiple keystrokes. How many times have you forgotten whether the language you were using used `not` or `!` while drinking? ...  Or is that just me?

#### 'If-Then-(Else)' Statements
```
if beer.volume == 0 {                               if (beer.volume == 0) {
    beer = pour(new beer)                               beer = pour(new beer);
} else if beer.volume >= 1 {                        } else if (beer.volume >= 1) {               
    drink(beer)                                         drink(beer);
} else {                                            } else {
    chug(beer)                                          chug(beer);
}                                                   };
```

### Functions
  - Functions in Boozie are basically.... well exactly the same as JavaScript 2015 (ES6). Why? Because we feel that is the optimal way to define functions... especially whilst drinking!

```
let stir = (ingredients) => {                       let stir = (ingredients) => {
    ingredients.mix()                                   ingredients.mix();
}                                                   };

let pour = (beer, glass) => {                       let pour = (beer, glass) => {
    beer.volume = 0                                     beer.volume = 0;
    glass.volume = 16                                   glass.volume = 16.0;
}                                                   };
```
  - One important consequence of this is that Boozie supports first-class functions!

### String Interpolation
  - One of our favorite features of languages like JavaScript and Ruby is the ability to generate strings from data by way of string interpolation. We want to be able to do this in Boozie, too! But we don't like all those ugly curly braces. Let's make it simpler.

```
let beer, cup, fruit = "Blue Moon", "pilsner glass", "orange"           let [beer, cup, fruit] = ["Blue Moon", "pilsner glass", "orange" ];
burp(`Put the $fruit on the $cup full of $beer.`)                       console.log(`Put the ${fruit} on the ${cup} full of ${beer}.`);
// Outputs "Put the orange on the pilsner glass full of Blue Moon."     // Outputs "Put the orange on the pilsner glass full of Blue Moon."
```

### Reserved Words
  - Like most programming languages, certain keywords are reserved for syntactic functions. The following list of keywords may not be used for variable identifiers.

```
  "let"   | "set" | "burp"  | "for" | "in"   | "while"
  "match" | "if"  | "else"  | "new" | "true" | "false"
```

### Comments
  - Comments begin with a double-backslash and end with a line terminator, as in most curly-brace languages. Multi-line comments, however, are explicitly disallowed. This is both to discourage excessively verbose comments (we've all run across those rambling, multiple-paragraph comments by someone who likely spent more time describing their code in prose than he or she did writing it - which is an especially big concern after one has had a few beers) and to maintain internal consistency with the rest of our line-terminated code structure. Thanks to word wrap, if someone _really_ wants to keep babbling, we won't explicitly stop them... but they should probably just go home, they're drunk.

```
// This is a comment in Boozie                      // This is a comment
// This is too                                      // This is too
/* This is not legal                                /* This is not legal
in Boozie */                                        in Boozie */
Syntax error                                        // but valid in JavaScript!
```

## Macrosyntax
```
Program         ::= Block
Block           ::= (Stmt "\n")*
Stmt            ::= IfStmt | ForStmt | WhileStmt | MatchStmt
                    | ReturnStmt     | VarDecl   | Exp
IfStmt          ::= 'if' BoolExp '{' Stmt '}'
                    ('else if' BoolExp '{' Stmt '}')* ('else' '{' Stmt '}' )?
WhileStmt       ::= 'while' BoolExp '{' Block '}'
ForStmt         ::= 'for' id 'in' id '{' Block '}'
MatchStmt       ::= 'match' Exp 'with' Exp
ReturnStmt      ::= "return" Exp
VarDecl         ::= ("let" | "set") id ("," id)* "=" Exp ("," Exp)*

Exp             ::= BoolExp | Exp1
BoolExp         ::= Exp1 ("and" Exp)* | Exp1 ("or" Exp)*
Exp1            ::= Exp2 (relationalOp Exp2)?
Exp2            ::= Exp3 (addOp Exp3)*
Exp3            ::= Exp4 (mulOp Exp4)*
Exp4            ::= '-'? Literal
Literal         ::= floatlit | boollit | stringlit

```

## Microsyntax
```
type            ::= "float" | "bool" | "string"
boollit         ::= "true" | "false"
floatlit        ::= digit+ ('.' digit+)? (('E'|'e') ('+'|'-'))?
stringlit       ::= "\"" char* "\""
char            ::= escape | ~escape any
escape          ::= "\'" | "\"" | "\r" | "\n" | "\/"
keywords        = ("let"    | "set"   | "burp"  | "for"   | "in"
                  | "while" | "match" | "if"    | "else"  | "new"
                  | "true"  | "false" | "return") ~idrest
id              ::= ~keywords letter idrest
idrest          ::= "_" | alnum
comment         ::= "//" (~"\n" any)* "\n"

assignOp        ::= '=' | '+=' | '*=' | '-=' | '/=' | '%='
relationalOp    ::= '=='| '>'  | '<'  | '>=' | '<=' | '!='
addOp           ::= '+' | '-'
mulOp           ::= '*' | '/'  | '%'
```
