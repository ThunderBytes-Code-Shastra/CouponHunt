const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    bankName: String,
    cardType: String,
    offer: String,
    desc: String,
    code: String,
    tnc: String,
    companyname: String,
    img: Srting,
    isDeal: Number,
    offerType: Number,
    offerValue: Number,
  },
  { collection: "offer" }
);

const Offer = mongoose.model("offer", OfferSchema);

module.exports = Offer;
