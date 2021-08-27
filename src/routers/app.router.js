const express = require("express");
const router = express.Router();

router.use(express.static(process.cwd() + '/src/assets'));
// Home page route
router.get("/", ({}, res) => {
  res.status(200).render('index');
  res.end();
});

module.exports = router;
