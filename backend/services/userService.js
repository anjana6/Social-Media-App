import userRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwtHelper from '../utils/Helpers/jwtHelper';

class UserService {
  async loginUser(requestBody) {
    
    const { email, password } = requestBody;

    const user = await userRepository.fetchUserByEmail(email);
    if (!user) {
      throw new Error('Your email is incorrect');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Your password is not Match');
    }

    const token = jwtHelper.createToken(user.id,user.user_type);
    const loginUser = {
      id: user.id,
      name: user.name,
      usertype: user.user_type,
      studentNo: user.student_no
    }
    return {loginUser,token};
  }


  async addUser(requestBody) {
    //remove after create the project
    const { userType,name, password, email, studentNo } = requestBody;

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const body = {
      user_type: userType,
      name: name,
      email: email,
      student_no: studentNo,
      password: newPassword,
    };

    return userRepository.createUser(body);
  }
}

const userService = new UserService();
export default userService;
