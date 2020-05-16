/*
    to remove a variable of an object we should use delete syntax
    delete obj.propertyName;
*/

var obj = {
    name: 'Sia',
    age: 32,
    role: 'Senior Software Developer',
};

delete obj.age;

console.log(obj);
