/*
    To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
*/

let obj = {
    name: 'FreeCodeCamp',
    review: 'Awesome',
};
Object.freeze(obj);
obj.review = 'bad'; // will be ignored. Mutation not allowed
obj.newProp = 'Test'; // will be ignored. Mutation not allowed
console.log(obj);
