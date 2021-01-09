const User = require('../models').users;

class UserRepository{
    createUser(body){
        return User.create(body);
    }
}

const userRepository = new UserRepository();
export default userRepository;