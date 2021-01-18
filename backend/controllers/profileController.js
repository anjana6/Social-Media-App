import profileService from '../services/ProfileService';
import resHelper from '../utils/Helpers/resHelper';

class ProfileController{

    async createProfile(req,res){
        try {
            const profile = await profileService.createProfile(req.body);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

}

const profileController = new ProfileController();
export default profileController;