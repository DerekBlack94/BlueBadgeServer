const Sequelize = require('sequelize');
const sequelize = new Sequelize('character-creation', 'postgres', process.env.PG_PW, {
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

