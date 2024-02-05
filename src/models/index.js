const Sequelize = require('sequelize')
const MoviesModel = require('./movie')
const UsersModel = require('./user')
const ReviewsModel = require('./review')
const TagsModel = require('./tag')

const { PGNAME, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env

const setupDatabase = () => {
    const connection = new Sequelize(PGNAME, PGUSER, PGPASSWORD, {
        host: PGHOST,
        port: PGPORT,
        dialect: 'postgres',
        logging: true
    })

    const Movie = MoviesModel(connection, Sequelize)
    const User = UsersModel(connection, Sequelize)
    const Review = ReviewsModel(connection, Sequelize)
    const Tag = TagsModel(connection, Sequelize)

    Review.belongsTo(User, { foreignKey: 'userId' })
    Review.belongsTo(Movie, { foreignKey: 'movieId' })
    Tag.belongsTo(User, { foreignKey: 'userId' })
    Tag.belongsTo(Movie, { foreignKey: 'movieId' })

    User.hasMany(Review)
    User.hasMany(Tag)
    Movie.hasMany(Review)
    Movie.hasMany(Tag)

    connection.sync({ alter: true })
    return {
        Movie,
        User,
        Review,
        Tag
    }
}

module.exports = setupDatabase()
