const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : new Req\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/About":
        res.end("We are at About...");
        break;
      default:
        res.end("404");
        break;
    }
  });
  // res.end("hello from server again!!...");
  // console.log("here we go!");
  // console.log(req);
  // res.end("hello it's me again...");
});
myServer.listen((PORT = 8000), () => {
  console.log(`hey!!! ${PORT}`);
});
