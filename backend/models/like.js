module.exports = function (sequelize,DataTypes) {
    const like = sequelize.define('likes',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    });

    like.associate = function (models){
        like.belongsTo(models.users, {foreignKey: "user_id"});
        like.belongsTo(models.posts, {foreignKey: "post_id"});
    }

    return like;
}