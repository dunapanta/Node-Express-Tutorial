//Events are a core building block of node
const EventEmitter = require("events");

const customEmiter = new EventEmitter();

//on - listen for an event
//emit - emit an event

// subscribe
customEmiter.on("response", () => {
  console.log(`data reiceve`);
});

customEmiter.emit("response");
