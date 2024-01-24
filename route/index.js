const router = require("express").Router();
const bike = require("./bike.route");
const tv = require("./tv.route");
router.get("/", (req, res) => {
  res.json({ msg: "hello from index" });
});
router.use("/bike", bike);
router.use("/tv", tv);
module.exports = router;
