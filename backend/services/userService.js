import userRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';

class UserService {
  async loginUser(requestBody) {
    console.log(JSON.stringify(requestBody));
    const { email, password } = requestBody;

    const user = await userRepository.fetchUserByEmail(email);
    if (!user) {
      throw new Error('Your email is incorrect');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Your password is not Match');
    }
    return user;
  }

  createProfile(userId, requestBody) {
    const { name, age, gender } = requestBody;

    const body = {
      name: name,
      age: age,
      gender: gender,
    };
    return userRepository.updateUser(userId, body);
  }

  async addUser(requestBody) {
    //remove after create the project
    const { userType, password, email, studentNo } = requestBody;

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const body = {
      user_type: userType,
      email: email,
      student_no: studentNo,
      password: newPassword,
    };

    return userRepository.createUser(body);
  }
}

const userService = new UserService();
export default userService;
