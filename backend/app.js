const express = require("express");
require("dotenv").config();

//create an instance of express app and store it in app
const app = express();

const port = process.env.PORT;

//register view engine (ejs)
app.set("view engine", "ejs");
//default folder is called views, however in this project its pages --> telling this to ejs:
app.set("views", "pages")

app.get("/", (req, res) => {
  // .send automatically sets header depending on the content sending back, further is also
  //infers the status code

  //sending an html page:
  res.sendFile("./pages/index.html", { root: __dirname });
  //second argument tells express to look in the root folder of the directory

  //or directly html code
  //res.send("<h2>Home Page</h2>");
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
  //second argument tells express to look in the root folder of the directory
});

//redirects (if an url is moved permanently)
app.get("/old-link", (req, res) => {
  res.redirect("/about");
});

//404 page - use function is fired for every request, but only if it reaches
//the code block
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
