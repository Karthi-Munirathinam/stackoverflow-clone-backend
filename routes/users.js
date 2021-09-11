const express = require('express');
const router = express.Router();
const userModule = require('../modules/UserModule');

router.post('/saveuser', userModule.postUser);
router.get('/getusers', userModule.getUser);

module.exports = router;
