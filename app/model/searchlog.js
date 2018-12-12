'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const SearchLog = sequelize.define('SearchLog', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  SearchLog.prototype.associate = function(models) {
    // associations can be defined here
  };
  return SearchLog;
};