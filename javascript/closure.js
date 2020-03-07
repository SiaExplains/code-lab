var counter = (function() {
    var privateValue = 0;
    function applyValue(val) {
        privateValue += val;
    }
    return {
        increment: function() {
            applyValue(1);
        },
        decrement: function() {
            applyValue(-1);
        },
        get: function() {
            return privateValue;
        }
    };
})();

console.log(counter.get());
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
