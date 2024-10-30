const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  return res.status(200).send("Users Route Available");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
