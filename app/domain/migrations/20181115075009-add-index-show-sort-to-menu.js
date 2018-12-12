'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Menus', 'isIndexShow', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
    return queryInterface.addColumn('Menus', 'sort', {
      type: Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menus');
  }
};