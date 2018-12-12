'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  Tag.prototype.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};