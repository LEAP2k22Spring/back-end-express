const express = require("express");
const usersRoutes = require("./route/users");

const port = 8000;
const app = express();

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

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});