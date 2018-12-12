'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const WorkTag = sequelize.define('WorkTag', {
    workId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    workType: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  WorkTag.prototype.associate = function(models) {
    // associations can be defined here
  };
  return WorkTag;
};