const route = require("express").Route();
route.get("/", () => {
  resizeBy.json({ msg: "hello from index" });
});
