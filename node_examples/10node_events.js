
//necessary to create, fire, and listen for your own events
var events = require("events");
var eventEmitter = new events.EventEmitter();//all event properties and methods are an instance of an EventEmitter object.
                                                //to be able to access these properties and methods, create an EventEmitter object.
//you can assign event handlers to your own events with the EventEmitter object.
//first, create an event handler:
var myEventHandler = function(){
    console.log("I hear a scream!");
}
//then assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);
//fire the "scream" event:
eventEmitter.emit("scream");
