const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end(`
      <h1>Not Found</h1>
      <p>Error al navegar</p>
      <a href="/">Home</a>
      `);
  }
});

server.listen(5000);
