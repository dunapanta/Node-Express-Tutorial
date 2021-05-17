const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  //always need to include end in every response
  res.end("<h1>Hola</h1>");
});

server.listen(5000);
