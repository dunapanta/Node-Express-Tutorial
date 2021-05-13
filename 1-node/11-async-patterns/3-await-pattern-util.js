const { readFile, writeFile } = require("fs").promises;

/* const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
 */
// Async await

const start = async () => {
  try {
    const first = await readFile("./1-node/11-async-patterns/text.txt", "utf8");
    const second = await readFile(
      "./1-node/11-async-patterns/secondText.txt",
      "utf8"
    );
    await writeFile(
      "./1-node/11-async-patterns/tercero.txt",
      `Se creo nuevo archivo: ${first} ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// Transformando en Promesa
/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; */
