const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind("Error connecting to the DB"));

db.once("open", () => {
  console.log("Sucessfully connected to the DB");
});
