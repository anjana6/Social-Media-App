import postService from "../services/PostService";
import resHelper from "../utils/Helpers/resHelper";

class PostController{

    async fetchPosts(req,res){
        try {
            const posts = await postService.fetchPosts();
            resHelper.responseData(res,posts)
        } catch (error) {
            console.log(error);
            resHelper.serverFailing(res,error.message)
        }
    }

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