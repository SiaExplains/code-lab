const EventEmitter = require('events');
const emitter = new EventEmitter();

/* `on` vs `addListener` =>
    - the both of them as the same!
    - on is an alias for addlistener
*/

emitter.on('tutorial', () => {
    console.log('tutorial event raised!');
});

const comeFunc = () => {
    console.log('come here!');
};

emitter.addListener('come', comeFunc);

emitter.addListener('make-noise', async () => {
    console.log('NOOOOOOOOOOOISE!');
});

emitter.on('sum', (a, b) => {
    console.log(a + b);
});

//emitter.off('come', comeFunc);
//emitter.removeListener('come', comeFunc);
emitter.emit('tutorial');
emitter.emit('come');
emitter.emit('make-noise');
emitter.emit('sum', 5, 6);
