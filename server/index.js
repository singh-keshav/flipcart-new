const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
import appRoutes from "./api/routes"

mongoose
  .connect("mongodb://localhost/flipkart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("we are connected");
});

app.use("/", appRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(port, () => {
  console.log(`sever is running on port ${port}`);
});
