const EventEmitter = require("events");

const customEmiter = new EventEmitter();

//on - listen for an event
//emit - emit an event

// subscribe
customEmiter.on("response", (name, age) => {
  console.log(`data reiceve name: ${name} age: ${age}`);
});
customEmiter.on("response", () => {
  console.log(`some other logic here`);
});

// emit always later, se pueden pasar argumentos
customEmiter.emit("response", "daniel", 25);
