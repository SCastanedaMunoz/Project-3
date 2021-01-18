const db = require("../models");

module.exports = {
  createOrUpdate: (req, res) => {
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };

    db.Document.findOneAndUpdate({ docId: req.body.docId }, req.body, options)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getAllDocumentsFromUser: (req, res) => {
    db.Document.find({ userEmail: req.params.userEmail })
      .sort({ date: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Document.deleteOne({ docId: req.params.docId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
};
