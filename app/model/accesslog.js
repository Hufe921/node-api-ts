'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const AccessLog = sequelize.define('AccessLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    token: DataTypes.STRING,
    api: DataTypes.STRING,
    ip: DataTypes.STRING,
    query: DataTypes.STRING,
    request: DataTypes.TEXT,
    isActive: DataTypes.BOOLEAN
  }, {});
  AccessLog.prototype.associate = function (models) {
    // associations can be defined here
  };
  return AccessLog;
};