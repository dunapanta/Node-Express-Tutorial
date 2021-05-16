const http = require("http");
const fs = require("fs");

//Con este metodo se envia grandes cantidades de chunk al usuario
/* http
  .createServer((req, res) => {
    const text = fs.readFileSync("./1-node/13-streams/big-file.txt", "utf8");
    res.end(text);
  })
  .listen(5000); */

// Usando Read Stream
http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream(
      "./1-node/13-streams/big-file.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      // pipe pass form read Steam to write stream we can read data in chunks also we can write data in chunks
      //on the browser appears en headers transfer-encoding: chunked
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
