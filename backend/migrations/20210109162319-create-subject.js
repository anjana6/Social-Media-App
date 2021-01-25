'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subjects',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      subject_code: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      subject: {
          type: Sequelize.STRING(300),
          allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      semester: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subjects')
  }
};
