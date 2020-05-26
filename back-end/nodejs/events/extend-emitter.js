const EventEmitter = require('events');

class PersonEmitter extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

let sia = new PersonEmitter('siavash');
let sheida = new PersonEmitter('Sheida');

sia.on('name', () => {
    console.log(`My name is ${sia.name}`);
});

sheida.on('name', () => {
    console.log(`My name is ${sheida.name}`);
});

sia.emit('name');
sheida.emit('name');
