// File System we can work async or sync
//Sync --> blocking
//Async --> not blocking

const { readFileSync, writeFileSync } = require("fs");
// read with two parameters path and encoding
const first = readFileSync("./1-node/7-fs-module/first.txt", "utf8");
const second = readFileSync("./1-node/7-fs-module/second.txt", "utf8");

console.log(first, second);

//Create new file, si no existe lo crea
writeFileSync(
  "./1-node/7-fs-module/result-sync.txt",
  `Resultado: ${first}, ${second}`,
  { flag: "a" } //opens the file and add the content
);
