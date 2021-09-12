const { MongoDBNamespace } = require('mongodb');
const { Mongoose } = require('mongoose');
const User = require('../models/Users');
const mongodb = require('mongodb');

exports.postUser = async (req, res, next) => {
    const bcryptjs = require('bcryptjs');
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);
    const user = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        password: hash,
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

exports.getUserbyid = async (req, res, next) => {
    const response = await User.find({ _id: mongodb.ObjectId(req.params.id) });
    res.send(response)
}