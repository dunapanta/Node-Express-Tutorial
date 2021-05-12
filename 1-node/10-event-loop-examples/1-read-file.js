const { readFile } = require("fs");

console.log("Primera tarea");

readFile("./1-node/10-event-loop-examples/file.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Primera tarea completada");
});

console.log("Comenzando nueva tarea");

/* Primera tarea
Comenzando nueva tarea
Event Loop
Primera tarea completada */