const Sequelize = require('sequelize');
const sequelize = new Sequelize('character-creation', 'postgres', 'Letmein1234', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    () => {
        console.log('Connected to character-creation database');
    },
    (err) => {
        console.log(err);
    }
);

module.exports = sequelize;

