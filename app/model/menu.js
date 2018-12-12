'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    workType: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    description: DataTypes.STRING,
    menuKey: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    isIndexShow: DataTypes.BOOLEAN,
    sort: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  Menu.prototype.associate = function (models) {
    this.SecondMenu = this.hasMany(models.Menu, {
      as: 'secondMenu',
      sourceKey: 'id',
      foreignKey: 'parentId'
    })
  };
  return Menu;
};