'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_type: {
          type: Sequelize.ENUM('lecturer','demo','student'),
          allowNull: false
      },
      name: {
        type: Sequelize.STRING(400),
        allowNull: true,
      },
      email: {
          type: Sequelize.STRING(200),
          allowNull: false
      },
      student_no: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      password: {
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
    await queryInterface.dropTable('users')
  }
};
