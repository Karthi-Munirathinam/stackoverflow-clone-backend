const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    questionTitle: {
        type: String,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        minlength: 15,
        maxlength: 500,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    votes: {
        type: Number,
        required: false
    },
    views: {
        type: Number,
        required: false
    },
    votesID: {
        type: Array,
        required: false
    },
    answers: {
        type: Array,
        required: false
    }

})

const Question = mongoose.model('Question', questionSchema, 'question');

module.exports = Question;