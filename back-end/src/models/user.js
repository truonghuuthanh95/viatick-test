"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.roles);
      // this.belongsTo(models.membershipTypes);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      membershipType: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
        allowNull: false,
      },
      companyName: { type: DataTypes.STRING, allowNull: false },
      designation: { type: DataTypes.STRING, allowNull: true },
      membershipPeriod: { type: DataTypes.INTEGER, defaultValue: 0 },
      startDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: true },
      attendance_status: { type: DataTypes.BOOLEAN, defaultValue: false },
      roleId: { type: DataTypes.INTEGER, defaultValue: 3 },
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
      freezeTableName: "users",
    }
  );
  return User;
};
