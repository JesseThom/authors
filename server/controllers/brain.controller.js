const { model } = require('mongoose');
const { Brain } = require('../modules/brain.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello from brains"
    })
}

module.exports.create = (req,res)=> {
    Brain.create(req.body)
    .then(brain => res.json(brain))
    .catch(err => res.status(400).json(err))
}

module.exports.findAll = (req, res) => {
    Brain.find()
        .then((brains) => {
            res.json(brains)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

module.exports.findOne = (req, res) => {
    Brain.findOne({ _id: req.params.id })
        .then(brain => {
            res.json({ brain })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
}

module.exports.updateOne = (req, res) => {
    Brain.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedBrain => {
            res.json({brain: updatedBrain})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteOneBrain = (req, res)=> {
    Brain.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went  wrong', error: err })
    });
}