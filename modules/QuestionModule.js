const Questions = require('../models/Questions');

exports.postQuestions = async (req, res, next) => {
    try {
        const questions = new Questions({
            questionTitle: req.body.questionTitle,
            description: req.body.description,
            tags: req.body.tags,
            votes: 0,
            views: 0,
            answers: []
        })
        const response = await questions.save();
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.getQuestions = async (req, res, next) => {
    const response = await Questions.find();
    res.send(response)
}