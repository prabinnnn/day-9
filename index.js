const express = require("express");
const indexRouter = require("./route");
const app = express();
app.use(express.json());
app.use("/", indexRouter);

app.listen(7500, () => {
  console.log("app is running ");
});
