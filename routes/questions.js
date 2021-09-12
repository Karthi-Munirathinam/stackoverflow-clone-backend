const express = require('express');
const router = express.Router();
const questionsmodule = require('../modules/QuestionModule');
const getTags = require('../modules/Tagsmodule')
const Authenticate = require('../Authenticate');

router.post('/postquestion', questionsmodule.postQuestions);
router.get('/getquestion', questionsmodule.getQuestions);
router.get('/gettags', getTags.getTags);

module.exports = router;
