const Like = require('../models').likes;

class LikeRepository{

    createLike(body){
        return Like.create(body);
    }

    fetchLikeByUserIdAndPostId(userId,postId){
        return Like.findOne({
            where: {
                user_id: userId,
                post_id: postId
            }
        })
    }

    deleteLike(userId,postId){
        return Like.destroy({
            where: {
                user_id: userId,
                post_id: postId
            }
        })
    }
}

const likeRepository = new LikeRepository();
export default likeRepository;