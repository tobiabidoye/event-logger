const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

//initialize object;
const myemitter = new MyEmitter();

myemitter.on('log', function(message){ 
    logEvents(message); 
});

setTimeout(function(){ 
    //emit event
    myemitter.emit('log','event logged!');
},2000);
///