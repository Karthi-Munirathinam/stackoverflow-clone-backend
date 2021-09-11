const User = require('../models/Users');

exports.postUser = async (req, res, next) => {
    const user = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        fullName: req.body.fullName
    })
    const response = await user.save();
    res.send(response)
}

exports.getUser = async (req, res, next) => {
    const response = await User.find();
    res.send(response)
}