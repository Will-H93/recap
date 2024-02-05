const User = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING
    }
    const user = sequelize.define('users', schema)
    return user
}

module.exports = User