exports.connect = () => {
    try {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/stackoverflow-clone', { useNewUrlParser: true, useUnifiedTopology: true })

    } catch (error) {
        console.log(error);
        process.exit();
    }
}