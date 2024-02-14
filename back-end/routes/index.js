var express = require('express');
const { sendMail } = require('../src/controller/sendMail');
const { deleteDocument } = require('../src/controller/deleteDocument');
const { insertInfo, findAllInfo, deleteAllInfo } = require('../src/controller/insertMyInfo');
const { login, register } = require('../src/controller/authenticate');
const { addExperience, fetchExperience } = require('../src/controller/experienceController');
var router = express.Router();

/* GET home page. */
router.post('/sendMail', sendMail);
router.delete('/deleteAll',deleteDocument)
router.put('/insertInfo',insertInfo)
router.get('/findAllInfo',findAllInfo)
router.delete('/deleteAllInfo',deleteAllInfo)
router.post('/login',login)
router.post('/register',register);
router.post('/addExperience',addExperience);
router.get('/getAllExperience',fetchExperience)
module.exports = router;
