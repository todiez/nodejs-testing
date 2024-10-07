const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //create server takes a callback function as argument and is running every time a request comes in
  //req object holds data of the client (user) request and the res object sends back some data to the user (client)


  //lodash
  const num = _.random(0, 20);
  console.log(num);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./pages/";
  switch (req.url) {
    //getting the url from the request object and comparing it to the existing routes on the server
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send html file from local storage
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });

  fs;
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
  //localhost is 127.0.0.1 and a loopback domain to own computer
});
