const Bank = require("../models/Bank.model");
const Offer = require("../models/Offer.model");

const viewBanks = async (req, res, next) => {
  try {
    const { limit } = req.query;

    console.log({ limit });

    const banks = await Bank.find().limit(limit ?? 25);

    res.status(200).json({ data: banks });
  } catch (err) {
    next();
  }
};

const viewOffers = async (req, res, next) => {
  try {
    const { limit, bankName, cardType } = req.query;
    let offers;
    console.log(req.query)
    if (bankName && cardType)
      offers = await Offer.find({ "bankName": bankName, "cardType": { $in: [cardType, 'Credit & Debit Cards'] } }).limit(limit ?? 25)
    else if (bankName)
      offers = await Offer.find({ "bankName": bankName }).limit(limit ?? 25)
    else if (cardType)
      offers = await Offer.find({ "cardType": { $in: [cardType, 'Credit & Debit Cards'] } }).limit(limit ?? 25)
    else
      offers = await Offer.find().limit(limit ?? 25)

    res.status(200).json({ data: offers });
  } catch (err) {
    next(err);
  }
};

module.exports = { viewBanks, viewOffers };
