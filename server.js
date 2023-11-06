const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    "<html><body><h1>Hello, this is a CICD Test Page..!</h1></body></html>"
  );
});
const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
