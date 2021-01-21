const Comment = require('../models').comments;

class CommentRepository{

    createComment(body){
        return Comment.create(body);
    }

    deleteComment(commentId){
        return Comment.destroy({
            where: {
                id: commentId
            }
        })
    }
}

const commentRepository = new CommentRepository();
export default commentRepository;