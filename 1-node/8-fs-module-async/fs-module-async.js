//Fs Async
const { readFile, writeFile } = require("fs");

// Needs to provide a callback, run the callback when we are done
readFile(
  "./1-node/8-fs-module-async/first-async.txt",
  "utf8",
  (err, result) => {
    if (err) {
      console.log("Err: ", err);
      return;
    }
    const first = result;
    readFile(
      "./1-node/8-fs-module-async/second-async.txt",
      "utf8",
      (err, result) => {
        if (err) {
          console.log("Err: ", err);
          return;
        }
        const second = result;
        writeFile(
          "./1-node/8-fs-module-async/result-async.txt",
          `Result: ${first}, ${second}`,
          { flag: "a" },
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
          }
        );
      }
    );
  }
);
