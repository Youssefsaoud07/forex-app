const express = require("express");
const { userRegister, userLogin, userUpdate } = require("../controllers/user.controller");
const { registerRules, validator } = require("../middleware/validator");

const isAuth = require("../middleware/passport-setup");

const router = express.Router();

router.post("/register", registerRules(), validator, userRegister);
router.post("/login", userLogin);
router.put("/update", userUpdate);
router.get("/currentPage", isAuth(), (req, res) => {
  res.send(req.user);
});

module.exports = router;