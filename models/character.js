module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('log', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        race: {
            type: DataTypes.ENUM("Human", "High Elf", "Dark Elf", ""),
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM("Male", "Female", "Nonbinary", "Other"),
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull:  false
        }
    })
    return Log;
}