let isFunction = function(obj) {
  return typeof obj == 'function' || false;
};

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  // add listener
  on(eventName, listener) {
    this.events.has(eventName) || this.events.set(eventName, []);
    this.events.get(eventName).push(listener);
  }

  emit(eventName, ...args) {
    let events = this.events.get(eventName);
    console.log(events)
    if (events && events.length) {
      events.forEach((event) => {
        console.log(event);
          // event(...args); 
      });
      return true;
    }
    return false;
  }

  off(eventName, listener) {
    let events = this.events.get(eventName),
        index;

    if (events && events.length) {
      index = events.reduce((i, event, index) => {
        return (isFunction(event) && event === listener) ? i = index : i;
      }, -1);
      if(index > -1) {
        events.splice(index, 1);
        this.events.set(eventName, events);
        return true;
      }
    }
    return false;
  }
}

// TESTS
const myEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

myEmitter.on('pramp', responseToEvent('yea'));
// myEmitter.once('pramp', function(msg) { console.log(msg + ' just once!'); });
// myEmitter.emit('pramp', '1st');
// myEmitter.emit('pramp', '2nd');
myEmitter.off('pramp', responseToEvent);
myEmitter.emit('pramp', '3rd');
// myEmitter.emit('pramp', '1st');
