/*
    it's a creational pattern
    it is similar a factory in real world that builds objects!

    CREATE DIFFERENT OBJECTS IN A CENTERALIZED LOCATION!

    Benefits:
    * create objects with initilization
    * took advantage of configuration to change app behavior without compilation.
*/

/* simple example: there are two types of employee (developer, tester).
 */

function Developer(name) {
    this.name = name;
    this.type = 'developer';
}
function Tester(name) {
    this.name = name;
    this.type = 'tester';
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    };
}

const factory = new EmployeeFactory();
var seniorDeveloepr = factory.create('siavash', 1);
var tester = factory.create('Miche', 2);
