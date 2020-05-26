class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }

    print() {
        console.log(this.greet());
    }
}

let greeter = new Greeter('world');
greeter.print();
