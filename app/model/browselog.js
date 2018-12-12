'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const BrowseLog = sequelize.define('BrowseLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    workType: DataTypes.INTEGER,
    workId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  BrowseLog.prototype.associate = function (models) {
    // associations can be defined here
  };
  return BrowseLog;
};