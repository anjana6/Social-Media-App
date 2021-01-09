import express from 'express';
import userController from '../controllers/userController';

const route = express.Router();

route.post('/api/v1/user',userController.addUser);


export default route;