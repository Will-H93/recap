const Review = (sequelize, DataTypes) => {
    const schema = {
        review: DataTypes.STRING
    }
    const review = sequelize.define('reviews', schema)
    return review
}

module.exports = Review