const { User } = require('../models')

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getUser = async (req, res) => {
    const users = await User.findAll()
    res.status(200).json(users);
};

module.exports = { createUser, getUser }