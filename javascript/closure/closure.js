// closure with iife
var counter = (function () {
    var privateValue = 0;
    function applyValue(val) {
        privateValue += val;
    }
    return {
        increment: function () {
            applyValue(1);
        },
        decrement: function () {
            applyValue(-1);
        },
        get: function () {
            return privateValue;
        },
    };
})();

counter.console.log(counter.get());
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

id = this.router.url ? this.router.url.split('/')[3] : null;
agentId = this.id ? this.id.split('?')[0] : null;
