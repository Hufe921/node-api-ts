'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const DownloadLog = sequelize.define('DownloadLog', {
    workId: DataTypes.INTEGER,
    workType: DataTypes.INTEGER,
    firstMenuId: DataTypes.INTEGER,
    secondMenuId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  DownloadLog.prototype.associate = function (models) {
    // associations can be defined here
  };
  return DownloadLog;
};