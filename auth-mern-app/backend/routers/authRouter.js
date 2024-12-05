const { signup, login } = require("../controller/authController");
const {
  signupValidation,
  loginValidation,
} = require("../middleware/authvalidation");

const router = require("express").Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;
