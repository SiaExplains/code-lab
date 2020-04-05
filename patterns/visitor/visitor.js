/*
    pattern not implemented yet!

    add or provide new operation/methods to an object without changing that object!
    
    It's not very popular in javascript / better to know!

    In read world:
    extending some library or frameworks
*/

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    accept(visitorFunction) {
        visitorFunction(this);
    }
}

let emp1 = new Employee('Siavash', 60000);

emp1.accept((emp) => {
    console.log('new operation with visitor pattern!');
    console.log('my salary is: ', emp.getSalary() * 2);
});
