var express = require('express');
const { sendMail } = require('../src/controller/sendMail');
const { deleteDocument } = require('../src/controller/deleteDocument');
var router = express.Router();

/* GET home page. */
router.post('/sendMail', sendMail);
router.delete('/deleteAll',deleteDocument)
module.exports = router;
