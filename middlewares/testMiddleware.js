var express = require("express");
var router = express.Router();

router.use("/", (req, res, next) => {
    console.log("hello middleware");
    next();
});

module.exports = router;
