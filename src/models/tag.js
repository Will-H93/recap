const Tag = (sequelize, DataTypes) => {
    const schema = {
        tag: DataTypes.STRING
    }
    const tag = sequelize.define('tags', schema)
    return tag
}

module.exports = Tag