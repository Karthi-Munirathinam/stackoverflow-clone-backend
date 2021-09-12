const dotenv = require('dotenv');
dotenv.config();
exports.connect = () => {
    try {
        const mongoose = require('mongoose');
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    } catch (error) {
        console.log(error);
        process.exit();
    }
}