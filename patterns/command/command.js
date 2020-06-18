/*
    a single entry point to do some actions!
*/

class Manager {
    constructor() {
        this.items = [];
    }

    do(name, params = null) {
        let funcName = '_' + name;
        let args = Array.from(arguments);
        if (funcName) this[funcName](args[1]);
    }

    _add(item) {
        this.items.push(item);
    }

    _print() {
        console.log(this.items);
    }
}

let mng = new Manager();
mng.do('add', ['ali', 'sia']);
mng.do('add', 'reza');
mng.do('print');
