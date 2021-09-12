const express = require('express');
const router = express.Router();
const userModule = require('../modules/UserModule');
const LoginModule = require('../modules/LoginModule');
const Authenticate = require('../Authenticate');

router.post('/saveuser', [Authenticate.Authenticate], userModule.postUser);
router.get('/getusers', [Authenticate.Authenticate], userModule.getUser);
router.get('/getusers/:id', userModule.getUserbyid);
router.post('/login', LoginModule.loginUser);
module.exports = router;
