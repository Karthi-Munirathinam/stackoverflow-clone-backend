const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.Authenticate = async (req, res, next) => {
    try {

        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, process.env.Secret_Key, function (error, decoded) {
                if (error) {
                    res.status(500).json({
                        message: "Unauthorized"
                    })
                } else {
                    console.log(decoded)
                    req.userid = decoded.id;
                    next()
                }

            });

        } else {
            res.status(401).json({
                message: "No Token Present"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

