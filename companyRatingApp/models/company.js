const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Company = sequelize.define('Company', {
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyPros: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyCons: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        companyRating: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Company;
};
