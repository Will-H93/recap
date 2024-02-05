const { Tag } = require('../models')

const createTag = async (req, res) => {
    try {
        const tag = await Tag.create(req.body)
        res.status(201).json(tag)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { createTag }