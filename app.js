const express = require("express");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log(req.url, req.method);
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
  res.render("index", {title: "Home", blogs });
});

app.get("/about", (req, res) => {
  console.log(req.url, req.method);
  res.render("about", {title: "About" });
});

app.get("/blogs/create", (req, res) => {
  console.log(req.url, req.method);
  res.render("create", {title: "Create a blog" });
});

app.use((req, res) => {
  console.log(req.url, req.method);
  res.status(404).render("404", {title: "404" });
});
