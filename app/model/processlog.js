'use strict';
module.exports = app => {
  const sequelize = app.model
  const DataTypes = app.Sequelize
  const ProcessLog = sequelize.define('ProcessLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    workId: DataTypes.INTEGER,
    workType: DataTypes.STRING,
    beforeStatus: DataTypes.INTEGER,
    afterStatus: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  ProcessLog.prototype.associate = function (models) {
    this.Case = this.belongsTo(models.Case, {
      as: 'Case',
      foreignKey: 'workId',
      targetKey: 'id'
    })
    this.Download = this.belongsTo(models.Download, {
      as: 'Download',
      foreignKey: 'workId',
      targetKey: 'id'
    })
    this.Visual = this.belongsTo(models.Visual, {
      as: 'Visual',
      foreignKey: 'workId',
      targetKey: 'id'
    })
  };
  return ProcessLog;
};