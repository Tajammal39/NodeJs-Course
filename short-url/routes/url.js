const { handleGenerateNewShortURL } = require("../controller/url");
const express = require("express");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

module.exports = router;
