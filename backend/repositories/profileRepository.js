const Profile = require('../models').profiles;

class ProfileRepository{

    createProfile(body){
        return Profile.create(body);
    }

    updateProfile(profileId,body){
        return Profile.update(body,{
            where: {
                id: profileId
            }
        })
    }

    fetchProfileByUserId(userId){
        return Profile.findOne({
            where: {
                user_id: userId
            }
        })
    }


}

const profileRepository = new ProfileRepository();
export default profileRepository;