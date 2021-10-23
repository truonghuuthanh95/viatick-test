"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attandance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attandance.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.BIGINT,
      loginAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "attendances",
      freezeTableName: "attendances",
      timestamps: false,
    }
  );
  return attandance;
};
