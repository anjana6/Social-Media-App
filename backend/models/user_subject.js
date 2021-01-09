module.exports = function (sequelize,DataTypes){
    const UsersSubjects = sequelize.define('users_subjects',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return UsersSubjects;
}