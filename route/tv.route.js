const router = require("express").Router();
router.get("/:name", () => {
  const data = req.params.name;
  console.log(`the name is ${data}`);
});
router.post("/", (req, res) => {
  console.log(req.query);
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
