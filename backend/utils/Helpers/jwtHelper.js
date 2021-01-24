import jwt from 'jsonwebtoken';

class JwtHelper{
    createToken(userId,userType){
        const payload = {
            userId: userId,
            userType: userType
        }

        return jwt.sign(payload,"New key")
    }

}

const jwtHelper = new JwtHelper();
export default jwtHelper;