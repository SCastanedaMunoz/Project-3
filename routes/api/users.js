const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");


router.route("/register").post(userController.register);

router.route("/login").post(passport.authenticate('local'), userController.login);

router.route("/currentUser").get(userController.getCurrentUser)
 
router.route("/logout").get(userController.logout)

module.exports = router;
