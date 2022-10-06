const express = require("express");
const usersRoutes = require("./route/users.js");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv/config") ;
const mongoose = require("mongoose");

const port = process.env.PORT;
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_url,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response) => {
  console.log("Successfully connected to MongoDB");
  
  app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
  });
}).catch((error) => console.log(error));

app.use(cors())
app.use(express.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Get request is successfully.");
});

app.post("/", (req, res) => {
  res.send("Post request is successfully.");
});

app.put("/", (req, res) => {
  res.send("Put equest is successfully.");
});

app.delete("/", (req, res) => {
  res.send(" request is successfully.");
});

