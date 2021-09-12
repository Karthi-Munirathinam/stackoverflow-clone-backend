const express = require('express');
const router = express.Router();
const companyModule = require('../modules/CompanyModule');
const Authenticate = require('../Authenticate');

router.post('/savecompany', [Authenticate.Authenticate], companyModule.postCompany);
router.get('/getcompany', companyModule.getCompany);

module.exports = router;
