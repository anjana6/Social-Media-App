import userService from "../services/userService";

class UserConatroller{

    async addUser(req,res){
        try {
            const user = await userService.addUser(req.body);

        } catch (error) {
            console.log(error);
        }
    }


}

const userController = new UserConatroller();
export default userController;