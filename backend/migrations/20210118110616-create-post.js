'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
      },
      title: {
          type: Sequelize.STRING(300),
          allowNull: false
      },
      post_url: {
          type: Sequelize.STRING(500),
          allowNull: true
      },
      description: {
          type: Sequelize.STRING(300),
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
    await queryInterface.dropTable('posts');
  }
};
