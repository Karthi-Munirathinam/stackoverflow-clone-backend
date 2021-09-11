const Company = require('../models/Company');

exports.postCompany = async (req, res, next) => {
    try {
        const company = new Company({
            companyName: req.body.companyName,
            location: req.body.location,
            description: req.body.description,
            imgUrl: req.body.imgUrl,
            tags: req.body.tags,
            jobs: req.body.jobs
        })
        const response = await company.save();
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.getCompany = async (req, res, next) => {
    const response = await Company.find();
    res.send(response)
}