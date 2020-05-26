var obj1 = new Object({ ali: 1 });
var o2 = obj1;
o2.ali = 2;
obj1.varx = 777;
o2.varx = 666;
obj1 = null;

console.log(o2);
