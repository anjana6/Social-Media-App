class ProfileService{

    createProfile(requestBody){
        const {userId,profileUrl,birthDay,status,gender,school,university,homeTown,} = requestBody;
        const body = {

        }
    }
}

const profileService = new ProfileService;
export default profileService;