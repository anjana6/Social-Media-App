import likeService from '../services/likeService';
import resHelper from '../utils/Helpers/resHelper';

class LikeController{

    async updateLike(req,res){
        try {
            const postId = req.params.postId;
            await likeService.updateLike(postId,req.body);
            resHelper.updated(res);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }
}

const likeController = new LikeController();
export default likeController;