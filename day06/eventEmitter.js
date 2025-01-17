import EventEmitter from 'events';

// Creating Class
class MyEmitter extends EventEmitter {}

// Creating Object
const myEmitterInstance = new MyEmitter();

// Register event listener
myEmitterInstance.on('event', () => {
  console.log('An event occurred!');
});

// Trigger event
myEmitterInstance.emit('event');
myEmitterInstance.emit('event');
