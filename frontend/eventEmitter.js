class EventEmitter {
  constructor() {
    this.events = {};
  }

  getEventListByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set();
    }
    return this.events[eventName];
  }

  // add listener
  on(eventName, listener) {
    this.getEventListByName(eventName).add(listener);
  }

  emit(eventName, ...args) {
    this.getEventListByName(eventName).forEach(listener => listener.apply(this, args).bind(this));
  }

  removeListener(eventName, listener) {
    this.getEventListByName(eventName).delete(listener);
  }
}

// TESTS
const myEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

myEmitter.on('pramp', responseToEvent('yea'));
// myEmitter.once('pramp', function(msg) { console.log(msg + ' just once!'); });
myEmitter.emit('pramp', '1st');
// myEmitter.emit('pramp', '2nd');
// myEmitter.off('pramp', responseToEvent);
// myEmitter.emit('pramp', '3rd');
// myEmitter.emit('pramp', '1st');
