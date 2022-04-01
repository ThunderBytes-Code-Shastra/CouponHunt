const { Router } = require("express");
const { viewBanks, viewOffers } = require("../controllers/OfferNBank.controller");
const router = Router();

router.get("/banks", viewBanks);
router.get("/offers", viewOffers);

module.exports = router;
