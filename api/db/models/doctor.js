'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctor.init(
    {
      name: DataTypes.STRING,
      CRM: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      cel: DataTypes.INTEGER,
      CEP: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'doctor',
    },
  );
  return doctor;
};
