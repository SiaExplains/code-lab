abstract class Car {
    public name: String;
    public getName(): String {
        return this.name;
    }
    public abstract cost(): number;
}
class ModelS extends Car {
    public name = 'Model S';
    public cost(): number {
        return 1000;
    }
}
class ModelX extends Car {
    public name = 'Model X';
    public cost(): number {
        return 2000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getName(): String;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getName(): String {
        return this.decoratedCar.getName() + ', Enhanced AutoPilot';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class RearFacingSeats extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getName(): String {
        return this.decoratedCar.getName() + ', Rear Facing Seats';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 400;
    }
}

let myTesla = new ModelS();
myTesla = new EnhancedAutoPilot(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.getName() + ' , Price: ' + myTesla.cost());
