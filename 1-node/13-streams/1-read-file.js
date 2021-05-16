//Streams --> Read or Write sequencially --- writeable - readable - duplex - transform
//streams extends emiters class
//cuando se leen archivos es mejor usar streams en vez de asignar la info en una variable

//Generate Big File

/* const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./1-node/13-streams/big-file.txt", `Nuumero: ${i}\n`, {
    flag: "a",
  });
} */

const { createReadStream } = require("fs");

//const stream = createReadStream("./1-node/13-streams/big-file.txt");

// segundo argumento size of the buffer
const stream = createReadStream("./1-node/13-streams/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// La info se lee en chunks equivale a 65486 bytess
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
