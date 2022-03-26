const Bank = require("../models/Bank.model");
const Offer = require("../models/Offer.model");

const viewBanks = async (req, res, next) => {
  try {
    const {limit} = req.query;

    console.log({limit})

    const banks =await Bank.find().limit(limit ?? 25);

    res.status(200).json({ data: banks });
  } catch (err) {
    next();
  }
};

const viewOffers = async (req, res, next) => {
  try {
    const {filter} = req.query;

    if(filter)
    const offers = await Offer.
  } catch (err) {
    next(err);
  }
}

module.exports = { viewBanks,viewOffers };
