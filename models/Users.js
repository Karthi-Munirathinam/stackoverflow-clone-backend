const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: {
        type: String,
        minlength: 3,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        required: true
    },
    location: {
        type: String,
        minLength: 3,
        required: false
    },
    fullName: {
        type: String,
        minlength: 3,
        required: false
    },
    about: {
        type: String,
        minlength: 25,
        maxlength: 250,
        required: false
    }

})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;