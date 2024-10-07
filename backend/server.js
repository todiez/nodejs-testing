const http = require("http");


const server = http.createServer((req, res) => {
    //create server takes a callback function as argument and is running every time a request comes in

    //req object holds data of the client (user) request and the res object sends back some data to the user (client)

    console.log("request made")

});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
});