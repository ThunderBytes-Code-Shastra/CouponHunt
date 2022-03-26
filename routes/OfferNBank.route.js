const { Router } = require("express");
const { viewBanks } = require("../controllers/OfferNBank.controller");
const router = Router();

router.get("/banks", viewBanks);

module.exports = router;
