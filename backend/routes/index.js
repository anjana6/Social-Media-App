import express from 'express';
import userController from '../controllers/userController';

const route = express.Router();

route.post('/api/v1/user/temp',userController.addUserPassword);//remove after create the project
route.post('/api/v1/user/login',userController.loginUser);
route.put('/api/v1/user/profile/:userId',userController.createProfile);
route.get('/api/v1/user',userController.fetchUserById);


export default route;