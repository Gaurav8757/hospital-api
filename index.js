require("dotenv").config();
const express = require("express");
const port = process.env.PORT || "8000";
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const app = express();
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    '<div style = "font-family: Arial, Helvetica, sans-serif;display: flex; flex-direction:column; gap:2rem;align-items:center; justify-content:center; color:orangered; padding: 30px"><h1 style="font-size: 3rem">🏥 Hospital API 🚑</h1><a href="/api-docs" style = "background: orangered; padding: 10px 20px; color:white; text-decoration:none; font-size:1rem; cursor:pointer; border-radius:5px" href="/api-docs"><p style="font-size: 2rem; margin:0">Documentation 📄</p></div>'
  );
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//loading the router
app.use("/", require("./routes/index"));

//starting the server
app.listen(port, function (err) {
  if (err) {
    console.log("Error in starting the server");
  }
  console.log(`Server is running on Port:${port}`);
});
