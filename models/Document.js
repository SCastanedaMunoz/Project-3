const { Int32 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  docId: String,
  userEmail: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  step: {
    type: Number,
    required: true,
  },
  members: {
    type: Array,
  },
  companyDetails: {
    address1: String,
    address2: String,
    businessPurpose: String,
    city: String,
    effectiveDate: String,
    filingDate: String,
    name: String,
    state: String,
    zip: String,
  },
  raDetails: {
    address1: String,
    address2: String,
    city: String,
    name: String,
    state: String,
    zip: String,
  },
  certificateTerm: {
    type: String,
  },
  standardVoteTerm: {
    type: String,
  },
  taxDistributionTerm: {
    type: String,
  },
  pushPullTerm: {
    type: String,
  },
  fiduciaryDutyTerm: {
    type: String,
  },
}, { _id: false });

let Document = module.exports = mongoose.model("Document", DocumentSchema);
