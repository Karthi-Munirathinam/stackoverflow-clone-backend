const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        minlength: 3,
        required: true
    },
    location: {
        type: String,
        minLength: 3,
        required: true
    },
    imgUrl: {
        type: String,
        minlength: 10,
        required: true
    },
    description: {
        type: String,
        minlength: 25,
        maxlength: 250,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    jobs: {
        type: Number,
        required: true
    }

})

const Company = mongoose.model('Company', companySchema, 'company');

module.exports = Company;