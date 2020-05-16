/*
    Problems with var:
    1. it's overwriting existed variable
    2. scope problem
    3. difficult to searching and fixing overwriting bugs
*/

var lang = 'javascript';
var lang = 'c++';
console.log(lang); // expect to print c++, becuase it's overwritted.
