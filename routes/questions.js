const express = require('express');
const router = express.Router();
const questionsmodule = require('../modules/QuestionModule');

router.post('/postquestion', questionsmodule.postQuestions);
router.get('/getquestion', questionsmodule.getQuestions);

module.exports = router;
