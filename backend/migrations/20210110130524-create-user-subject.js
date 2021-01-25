'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_subjects',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
      },
      subject_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "subjects",
            key: "id",
          },
      },
      result: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_subjects')
  }
};
