'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const UserEntity = sequelize.define('UserEntity', {
    userNo: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    job: DataTypes.STRING,
    directorNo: DataTypes.STRING,
    directorName: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    defaultScope: {
      where: {
        status: '在职'
      }
    }
  });
  UserEntity.prototype.associate = function (models) {
    this.Permissions = this.hasMany(models.UserPermission, {
      as: 'permissions',
      foreignKey: 'userNo',
      sourceKey: 'userNo'
    })
    this.ProcessLogs = this.hasMany(models.ProcessLog, {
      as: 'processLogs',
      foreignKey: 'userNo',
      sourceKey: 'userNo'
    })
  };
  return UserEntity;
};