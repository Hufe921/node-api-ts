'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visuals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GUID: {
        type: Sequelize.STRING
      },
      submitCount: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      name: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      submiterId: {
        type: Sequelize.INTEGER
      },
      submiterNo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      cover: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      isLatest: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      sort: {
        type: Sequelize.INTEGER
      },
      imageNo: {
        type: Sequelize.STRING
      },
      colorMode: {
        type: Sequelize.STRING
      },
      fileSize: {
        type: Sequelize.STRING
      },
      fileFormat: {
        type: Sequelize.STRING
      },
      workSoftware: {
        type: Sequelize.STRING
      },
      attachment: {
        type: Sequelize.STRING
      },
      isLatestVersion: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Visuals');
  }
};