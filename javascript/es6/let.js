/*
    If you overwritting a variable that declared with `let`, you'll face with an error.
    `let` was introduced in ES6 to solve overwritting potential issue
*/

let lang = 'javascript';
let lang = 'c++';
// Identifier 'lang' has already been declared
console.log(lang); // expect to throw an error
