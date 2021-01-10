const User = require('../models').users;

class UserRepository{
    createUser(body){
        return User.create(body);
    }

    updateUser(userId,body){
        return User.update(body,{
            where: {
                id: userId
            }
        })
    }

    fetchUserByEmail(email){
        return User.findOne({
            where: {
                email: email
            }
        })
    }
}

const userRepository = new UserRepository();
export default userRepository;