const express = require('express');
const router = express.Router();
const questionsmodule = require('../modules/QuestionModule');
const getTags = require('../modules/Tagsmodule')
const Authenticate = require('../Authenticate');

router.post('/postquestion', [Authenticate.Authenticate], questionsmodule.postQuestions);
router.put('/postanswer/:id', questionsmodule.putanswer);
router.get('/getquestion', questionsmodule.getQuestions);
router.get('/getquestion/:id', questionsmodule.getQuestion);
router.get('/gettags', getTags.getTags);

module.exports = router;
