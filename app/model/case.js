'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const Case = sequelize.define('Case', {
    GUID: DataTypes.STRING,
    submitCount: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    submiterId: DataTypes.INTEGER,
    submiterNo: DataTypes.STRING,
    cover: DataTypes.STRING,
    content: DataTypes.TEXT,
    isLatest: DataTypes.BOOLEAN,
    isIndexShow: DataTypes.BOOLEAN,
    isFirst: DataTypes.BOOLEAN,
    isRecommend: DataTypes.BOOLEAN,
    recommendCover: DataTypes.STRING,
    sort: DataTypes.INTEGER,
    firstMenuId: DataTypes.INTEGER,
    secondMenuId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    isLatestVersion: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {});
  Case.prototype.associate = function (models) {
    this.User = this.belongsTo(models.UserEntity, {
      as: 'submiter',
      targetKey: 'userNo',
      foreignKey: 'submiterNo'
    })
    this.FirstMenu = this.belongsTo(models.Menu, {
      as: 'firstMenu',
      targetKey: 'id',
      foreignKey: 'firstMenuId'
    })
    this.SecondMenu = this.belongsTo(models.Menu, {
      as: 'secondMenu',
      targetKey: 'id',
      foreignKey: 'secondMenuId'
    })
    this.Tags = this.belongsToMany(models.Tag, {
      as: 'tags',
      through: models.WorkTag,
      foreignKey: 'workId',
      otherKey: 'tagId'
    })
  };
  return Case;
};