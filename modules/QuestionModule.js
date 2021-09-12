const Questions = require('../models/Questions');
const mongodb = require('mongodb')
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

exports.putanswer = async (req, res, next) => {
    try {
        const data = await Questions.findOne({ _id: mongodb.ObjectId(req.params.id) })
        const response = await Questions.findOneAndUpdate({ _id: mongodb.ObjectId(req.params.id) }, {
            questionTitle: req.body.questionTitle,
            description: req.body.description,
            tags: req.body.tags,
            votes: req.body.votes,
            views: req.body.views,
            answers: [...data.answers, req.body.answer]
        })
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
exports.getQuestion = async (req, res, next) => {
    const response = await Questions.findOne({ _id: mongodb.ObjectId(req.params.id) });
    res.send(response);

}