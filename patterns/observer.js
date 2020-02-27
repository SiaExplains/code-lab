function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter(f => f != fnToRemove);
    },
    fire: function() {
        this.observers.forEach(fn => fn.call());
    }
};

const subject = new Subject();

function observer1() {
    console.log('Obsever one firing...');
}

function observer2() {
    console.log('Obsever two firing...');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();

subject.unsubscribe(observer2);
subject.fire();
