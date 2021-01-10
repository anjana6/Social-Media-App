import userService from "../services/userService";
import resHelper from "../utils/Helpers/resHelper";

class UserConatroller{
    async loginUser(req,res){
        try {
            const user = await userService.loginUser(req.body);
            resHelper.responseData(res,user)
        } catch (error) {
            console.log(error)
        }
    }

    async createProfile(req,res){
        try {
            const userId = req.params.userId;
            const user = await userService.createProfile(userId,req.body);
            resHelper.updated(res);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

    async fetchUserById(req,res){
        try {
            const user = await userService.fetchUserById(req.params.userId);
            resHelper.responseData(res,user);
        } catch (error) {
            resHelper.serverFailing(res,erro.message)
        }
    }

    

    async addUserPassword(req,res){       //remove after create the project
        try {
            const user = await userService.addUser(req.body);
            resHelper.created(res,user);

        } catch (error) {
            console.log(error);
        }
    }


}

const userController = new UserConatroller();
export default userController;