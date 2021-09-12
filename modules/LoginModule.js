const bcryptjs = require('bcryptjs');
const Login = require('../models/Login');
const dotenv = require('dotenv');
dotenv.config();

exports.loginUser = async (req, res, next) => {

    let user = await Login.findOne({ "email": req.body.email });
    if (user) {
        let matchPassword = bcryptjs.compareSync(req.body.password, user.password);
        console.log(matchPassword);
        if (matchPassword) {
            //JWTtoken
            const jwt = require('jsonwebtoken');
            let token = jwt.sign({ id: user._id }, process.env.Secret_Key);

            res.json({
                message: true,
                token,
                id: user._id,
            })
        }
        else {
            res.status(404).json({
                message: "email/password is incorrect"
            })
        }
    } else {
        res.status(400).json({
            message: "user doesnot exist"
        })
    }
}

