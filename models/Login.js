const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({

    password: {
        type: String,
        minlength: 8,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        required: true
    }

})

const Login = mongoose.model('Login', loginSchema, 'user');

module.exports = Login;