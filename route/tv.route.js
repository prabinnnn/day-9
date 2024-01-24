const router = require("express").Router();
router.get("/:name", () => {
  const data = req.params.name;
  console.log(`the name is ${data}`);
});
module.exports = router;
