const Questions = require('../models/Questions');


exports.getTags = async (req, res, next) => {
    const response = await Questions.find({},{tags:1});
    res.send(response)
}