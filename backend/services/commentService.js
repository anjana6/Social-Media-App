import commentRepository from "../repositories/commentRepository";

class CommentService{

    createComment(requestBody){
        const {userId,postId,comment} = requestBody;

        const body = {
            user_id: userId,
            post_id: postId,
            comment: comment
        }

        return commentRepository.createComment(body);
    }

    deleteComment(commentId){
        
        return commentRepository.deleteComment(commentId);
    }
}

const commentService = new CommentService();
export default commentService;