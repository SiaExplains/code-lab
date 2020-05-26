/*
    If you overwritting a variable that declared with `let`, you'll face with an error.
    `let` was introduced in ES6 to solve overwritting potential issue

    Problems with var:
    1. it's overwriting existed variable
    2. scope problem
    3. difficult to searching and fixing overwriting bugs


    VAR vs LET
    1. Var is Function Scope / Let is block scope

*/

function func1() {
    for (var i = 0; i < 1; i++) {
        var x = 14;
    }
    console.log(x);
}

/*
    will print 14: becuase x is declared with var so it's alive whole function
*/
func1();

function func2() {
    for (var i = 0; i < 1; i++) {
        let x = 14;
    }
    console.log(x);
}

/*
    will throw an error, becuase x is limited to scope not whole function!
*/
func2();

let lang = 'javascript';
let lang = 'c++';

var book = 'javascript';
var book = 'c++';

// Identifier 'lang' has already been declared
console.log(book); // expect to print c++, becuase it's overwritted.
console.log(lang); // expect to throw an error
