module.exports = function(sequelize,DataTypes){
    const subjects = sequelize.define('subjects',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subject_code: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
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

    subjects.associate = function(models){
        subjects.belongsToMany(models.users,{ through: 'users_subjects' })
    }

    return subjects;
}