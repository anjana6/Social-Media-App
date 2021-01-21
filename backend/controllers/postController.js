import postService from "../services/PostService";
import resHelper from "../utils/Helpers/resHelper";

class PostController{

    async createPost(req,res){
        try {
            const post = await postService.createPost(req.body);
            resHelper.created(res,post);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

    async deletePost(req,res){
        try {
            await postService.deletePost(req.params.postId);
            resHelper.deleted(res);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }
}

const postController = new PostController();
export default postController;