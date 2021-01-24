module.exports = function (sequelize,DataTypes){
    const comment = sequelize.define('comments',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    });

    comment.associate = function (models){
        comment.belongsTo(models.posts, {foreignKey: "post_id"});
        comment.belongsTo(models.users, {foreignKey: "user_id"});
    }

    return comment;
}