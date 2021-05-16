const EventEmitter = require("events");

const customEmiter = new EventEmitter();

//on - listen for an event
//emit - emit an event

customEmiter.on("response", () => {
  console.log(`data reiceve`);
});

customEmiter.emit("response");
