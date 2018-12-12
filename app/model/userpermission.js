'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const UserPermission = sequelize.define('UserPermission', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    permission: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  UserPermission.prototype.associate = function(models) {
    // associations can be defined here
  };
  return UserPermission;
};