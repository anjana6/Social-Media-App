module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_type: {
        type: DataTypes.ENUM('lecturer', 'demo', 'student'),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      student_no: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      freezeTableName: true,
    }
  );

  users.associate = function (models) {
    users.belongsToMany(models.subjects, {
      through: 'user_subjects',
      as: 'subjects',
      foreignKey: 'user_id',
    });

    users.hasMany(models.comments, {foreignKey: "user_id"});
    users.hasMany(models.likes, {foreignKey:"user_id"});
    users.hasMany(models.posts, {foreignKey: "user_id"});
    users.hasOne(models.profiles, {foreignKey: "user_id"})
  };

  return users;
};
