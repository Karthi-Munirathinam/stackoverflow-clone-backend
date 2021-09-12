const express = require('express');
const router = express.Router();
const userModule = require('../modules/UserModule');
const LoginModule = require('../modules/LoginModule');
const Authenticate = require('../Authenticate');

router.post('/saveuser', userModule.postUser);
router.get('/getusers', userModule.getUser);
router.get('/getusers/:id', userModule.getUserbyid);
router.post('/login', LoginModule.loginUser);
module.exports = router;
