'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profiles',{
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
    profile_url:{
        type: Sequelize.STRING(500),
        allowNull: true
    },
    birthday:{
        type: Sequelize.DATE,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    gender: {
        type: Sequelize.ENUM('male','femail'),
        allowNull: true
    },
    school: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    university: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    home_town:{
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    current_city: {
        type: Sequelize.STRING(200),
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
    await queryInterface.dropTable('profiles');
  }
};
