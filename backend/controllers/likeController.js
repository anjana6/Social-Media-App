const { default: likeService } = require("../services/likeService");
const { default: resHelper } = require("../utils/Helpers/resHelper");

class LikeController{

    updateLike(req,res){
        try {
            const postId = req.params.postId;
            await likeService.updateLike(postId,req.body);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }
}