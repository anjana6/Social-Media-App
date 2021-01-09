import userRepository from "../repositories/userRepository";

class UserService{
    addUser(requestBody){
        const {userType,name,email,studentNo} = requestBody;

        const body = {
            user_type: userType,
            name: name,
            email: email,
            student_no: studentNo
        }

        return userRepository.createUser(body);
    }
}

const userService = new UserService();
export default userService;