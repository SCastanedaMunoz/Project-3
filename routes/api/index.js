const router = require("express").Router();
const userRoutes = require("./users");
const documentRoutes = require('./document');

router.use("/users", userRoutes); 
router.use("/documents", documentRoutes);

module.exports = router;