import express from 'express';
import subjectController from '../controllers/subjectController';
import userController from '../controllers/userController';

const route = express.Router();

//user
route.post('/api/v1/user/temp',userController.addUserPassword);//remove after create the project
route.post('/api/v1/user/login',userController.loginUser);
route.put('/api/v1/user/profile/:userId',userController.createProfile);
route.get('/api/v1/user',userController.fetchUserById);

//subject
route.post('/api/v1/subject',subjectController.addSubject); // remove after create the project
route.post('/api/v1/subject/user',subjectController.addSubjectByUserId) // remove after the project
route.get('/api/v1/subject/:userId/:year',subjectController.fetchSubjectByUserIdAndYear);
route.put('/api/v1/subject/result/:id',subjectController.addSubjectResult);
route.get('/api/v1/user/subject/:year',subjectController.fetchStudentSubjectByStudentNoAndYear)

export default route;