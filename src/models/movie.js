const Movie = (sequelize, DataTypes) => {
    const schema = {
        title: DataTypes.STRING,
        genre: DataTypes.STRING
    }
    const movie = sequelize.define('movies', schema)
    return movie
}

module.exports = Movie