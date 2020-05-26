var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    Greeter.prototype.print = function () {
        console.log(this.greet());
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.print();
