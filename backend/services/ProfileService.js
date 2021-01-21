import profileRepository from "../repositories/profileRepository";

class ProfileService{

    createProfile(requestBody){
        const {userId,profileUrl,birthDay,status,gender,school,university,homeTown,currentCity} = requestBody;
        const body = {
            user_id: userId,
            profile_url: profileUrl,
            birthday: birthDay,
            status: status,
            gender: gender,
            school: school,
            university: university,
            home_town: homeTown,
            current_city: currentCity
        }

        return profileRepository.createProfile(body);
    }

    updateProfile(profileId,requestBody){
        const {profileUrl,birthDay,status,gender,school,university,homeTown,currentCity} = requestBody;

        const body = {
            profile_url: profileUrl,
            birthday: birthDay,
            status: status,
            gender: gender,
            school: school,
            university: university,
            home_town: homeTown,
            current_city: currentCity
        }

        return profileRepository.updateProfile(profileId,body)

    }

    fetchProfileByUserId(userId){
        return profileRepository.fetchProfileByUserId(userId);
    }
}

const profileService = new ProfileService;
export default profileService;