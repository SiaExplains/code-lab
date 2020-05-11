/*

    It's a creational pattern.
    
    limit number of instances of an object to at most one!

    there are two types of singleton pattern:
    - thread-safe
    - non-thread-safe

    In real world:
    Jquery is a singleton example!
*/

var mySingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    function init() {
        // Singleton
        // Private methods and variables
        function privateMethod() {
            console.log('I am private');
        }
        var privateVariable = 'Im also private';
        var privateRandomNumber = Math.random();
        return {
            // Public methods and variables
            publicMethod: function () {
                console.log('The public can see me!');
            },
            publicProperty: 'I am also public',
            getRandomNumber: function () {
                return privateRandomNumber;
            },
        };
    }
    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        },
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
