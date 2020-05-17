/*
    In ES6, you can also declare variables using the const keyword.

    Variables declared using const are read-only

    Const declare block-scope like let

     A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

     Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.


     However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
*/

const book = 'javascript';
book = 'c++'; // returns error
