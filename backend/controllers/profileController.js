import profileService from '../services/profileService';
import resHelper from '../utils/Helpers/resHelper';

class ProfileController{

    async createProfile(req,res){
        try {
            const profile = await profileService.createProfile(req.body);
            resHelper.created(res,profile);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

    async updateProfile(req,res){
        try {
            const profileId = req.params.profileId;
            await profileService.updateProfile(profileId,req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error);
            resHelper.serverFailing(res,error.message);
        }
    }

    async fetchProfileByUserId(req,res){
        try {
            const profile = await profileService.fetchProfileByUserId(req.params.userId);
            resHelper.responseData(res,profile);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

}

const profileController = new ProfileController();
export default profileController;