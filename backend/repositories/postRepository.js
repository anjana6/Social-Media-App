const Post = require('../models').posts;
const Comment = require('../models').comments;
const Like = require('../models').likes;

class PostRepository{

    createPost(body){
        return Post.create(body);
    }

    deletePost(postId){
        return Post.destroy({
            where: {
                id: postId
            }
        })
    }

    fetchPosts(){
        return Post.findAll({
            include:[{model: Comment}, {model: Like}]
        })
    }

}

const postRepository = new PostRepository();
export default postRepository;