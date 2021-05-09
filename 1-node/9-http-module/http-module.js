const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Home Page");
  res.end();
});

server.listen(5000);
