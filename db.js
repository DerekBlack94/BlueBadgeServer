const Sequelize = require('sequelize');

const sequelize = new Sequelize( process.env.DB_CONNECTION_STRING, {

    
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

