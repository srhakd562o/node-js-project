const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database1', 'root', '@SITAram5620', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Company = require('./company')(sequelize, Sequelize);

module.exports = db;
