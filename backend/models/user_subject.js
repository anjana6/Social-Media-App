module.exports = function (sequelize,DataTypes){
    const UsersSubjects = sequelize.define('user_subjects',{
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
        },
        result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })

    return UsersSubjects;
}