
/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('character-creation', 'postgres', 'ThisIsAnOgre23', {
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
);*/

// module.exports = sequelize;

const {Sequelize} = require('sequelize');

const db = new Sequelize(process.env.DB_CONNECTION_STRING);

module.exports = db;

