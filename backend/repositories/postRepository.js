const Post = require('../models').posts;

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

}

const postRepository = new PostRepository();
export default postRepository;