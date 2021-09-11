const Questions = require('../models/Questions');

exports.postQuestions = async (req, res, next) => {
    try {
        const questions = new Questions({
            companyName: req.body.companyName,
            location: req.body.location,
            description: req.body.description,
            imgUrl: req.body.imgUrl,
            tags: req.body.tags,
            jobs: req.body.jobs
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