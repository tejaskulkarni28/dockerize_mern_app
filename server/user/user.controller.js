const express = require("express");
const router = express.Router();
const user = require("./user.service.js");

router.post("/sendtext", handleText);
module.exports = router;

function handleText(req, res, next) {
  console.log("HandleText controller triggered!!");
  user
    .handleInputs(req, res, next)
    .then((ok) =>
      ok ? res.json(ok) : res.status(400).json({ message: "not ok" })
    )
    .catch((err) => next(err));
}
