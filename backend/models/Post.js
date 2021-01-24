module.exports = function (sequelize,DataTypes) {
    const post = sequelize.define('posts',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        description: {
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

    post.associate = function(models){
        post.belongsTo(models.users, {foreignKey: "user_id"});
        post.hasMany(models.comments, {foreignKey: "post_id"});
        post.hasMany(models.likes, {foreignKey: "post_id"});
    }

    return post;
}