const User = require("../controller/userController");

var router = require("express").Router();

router.post("/insert", User.create);

router.get("/", User.findAll);

router.get("/published", User.findAllPublished);

router.get("/:id", User.findOne);

router.put("/:id", User.update);

router.delete("/delete/:email", User.delete);

router.delete("/", User.deleteAll);

module.exports = router;
