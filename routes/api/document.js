const router = require("express").Router();
const documentsController = require('../../controllers/documentsController');

router.route("/").post(documentsController.createOrUpdate);

router.route("/:docId").delete(documentsController.delete);

router.route("/:userEmail").get(documentsController.getAllDocumentsFromUser);

module.exports = router;