const express = require("express");
const app = express();
const indexrouter = require("./route");
app.use("/", indexrouter);
app.listen(7500, () => {
  console.log("app is running");
});
