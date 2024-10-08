const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

//create an instance of express app and store it in app
const app = express();

const port = process.env.PORT;

app.use(morgan("dev"));

//register view engine (ejs)
app.set("view engine", "ejs");
//default folder is called views, however in this project its pages --> telling this to ejs:
app.set("views", "pages");

app.get("/", (req, res) => {
  // .send automatically sets header depending on the content sending back, further is also
  //infers the status code

  //sending an html page:
  //res.sendFile("./pages/index.html", { root: __dirname });
  //second argument tells express to look in the root folder of the directory

  //or directly html code
  //res.send("<h2>Home Page</h2>");

  //or just render a view:
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

//404 page - use function is fired for every request, but only if it reaches
//the code block
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
