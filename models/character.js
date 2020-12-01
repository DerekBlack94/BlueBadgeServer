module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('character', {
        project_name: {
            type: DataTypes.STRING,
            allowNull:  true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        race: {
            type: DataTypes.ENUM("Human", "High Elf", "Dark Elf", "Wood Elf", "Dwarf", "Tiefling", "Half Orc", "Hobbit"),
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM("Male", "Female", "Nonbinary", "Other"),
            allowNull: false
        },
        character_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        background: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        owner: {
            type: DataTypes.INTEGER
        }
    });
    return Character;
};