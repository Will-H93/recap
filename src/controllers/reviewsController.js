const { Review, User, Movie } = require('../models')

const createReview = async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.status(201).json(review)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getUsersWithReviews = async (req, res) => {
    const userId = parseInt(req.params.id, 10)
    console.log(userId)
    try {
        const userReview = await User.findAll({
            attributes: ['name'],
            where: { id: userId },
            include: [
                {
                    model: Review,
                    attributes: ['review'],
                    required: false, //indicates left join, true would be inner join
                    include: [
                        {
                            model: Movie,
                            attributes: ['title', 'genre']
                        }
                    ]
                }
            ]
        })
        res.status(200).json(userReview)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { createReview, getUsersWithReviews }