const express = require("express");
const router = express.Router();

//import controller
const { localFileUpload } = require("../Controller/localfileUpload");

//define API route
router.post("/localFileUpload", localFileUpload);

module.exports = router;
