const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routers/index");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", routes);

app.listen(port, () => {
  console.log("connected");
});
