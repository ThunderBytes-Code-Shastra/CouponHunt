const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema(
  {
    name: String,
    thumbnail: String,
  },
  { collection: "bank" }
);

const Bank = mongoose.model("bank", BankSchema);

module.exports = Bank;
