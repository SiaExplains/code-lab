const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListener('come', () => {
    console.log('come here!');
});

emitter.addListener('make-noise', () => {
    console.log('NOOOOOOOOOOOISE!');
});

emitter.emit('come');
emitter.emit('make-noise');
