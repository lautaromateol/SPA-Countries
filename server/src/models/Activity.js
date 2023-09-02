const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {min: 1, max: 5},
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false
        }
    }, {timestamps: false});
};
