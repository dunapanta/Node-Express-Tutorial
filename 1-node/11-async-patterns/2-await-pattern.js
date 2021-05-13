const { readFile } = require("fs");

/* readFile("./1-node/11-async-patterns/text.txt", "utf8", (err, data) => {
  if (err) {
    return;
  } else {
    console.log(data);
  }
});
 */

// Transformando en Promesa
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./1-node/11-async-patterns/text.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Async await

const start = async () => {
  try {
    const first = await getText("./1-node/11-async-patterns/text.txt");
    const second = await getText("./1-node/11-async-patterns/secondText.txt");
    console.log("async", first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
