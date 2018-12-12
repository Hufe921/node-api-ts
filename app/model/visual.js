'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const Visual = sequelize.define('Visual', {
    GUID: DataTypes.STRING,
    submitCount: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    submiterId: DataTypes.INTEGER,
    submiterNo: DataTypes.STRING,
    status: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    content: DataTypes.TEXT,
    isLatest: DataTypes.BOOLEAN,
    sort: DataTypes.INTEGER,
    imageNo: DataTypes.STRING,
    colorMode: DataTypes.STRING,
    fileSize: DataTypes.STRING,
    fileFormat: DataTypes.STRING,
    workSoftware: DataTypes.STRING,
    attachment: DataTypes.STRING,
    isLatestVersion: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {});
  Visual.prototype.associate = function (models) {
    this.User = this.belongsTo(models.UserEntity, {
      as: 'submiter',
      targetKey: 'userNo',
      foreignKey: 'submiterNo'
    })
    this.Tags = this.belongsToMany(models.Tag, {
      as: 'tags',
      through: models.WorkTag,
      foreignKey: 'workId',
      otherKey: 'tagId'
    })
  };
  return Visual;
};