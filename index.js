require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/public/partials");

//send public content (static)
app.use(express.static("public")); // This is a middleware

// app.get("/", (req, res) => {
//   // res.send("Home page");
//   res.render("home", {
//     title: "Course Node",
//     name: "Carlos Arancibia",
//   });
// });

// app.get("/generic", (req, res) => {
//   // res.sendFile(__dirname + "/public/generic.html");
//   res.render("generic", {
//     title: "Course Node",
//     name: "Carlos Arancibia",
//   });
// });

// app.get("/elements", (req, res) => {
//   // res.sendFile(__dirname + "/public/elements.html");
//   res.render("elements", {
//     title: "Course Node",
//     name: "Carlos Arancibia",
//   });
// });

app.get("*", (req, res) => {
  // res.send("404 | Page not found");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => console.log(`page run in port: ${port}`));
