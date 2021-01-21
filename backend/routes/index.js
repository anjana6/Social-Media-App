import express from 'express';
import commentController from '../controllers/commentController';
import postController from '../controllers/postController';
import profileController from '../controllers/profileController';
import subjectController from '../controllers/subjectController';
import userController from '../controllers/userController';

const route = express.Router();

//user
route.post('/api/v1/user/temp',userController.addUserPassword);//remove after create the project
route.post('/api/v1/user/login',userController.loginUser);
route.put('/api/v1/user/profile/:userId',userController.createProfile);
route.get('/api/v1/user',userController.fetchUserById);

//profile
route.post('/api/v1/profile',profileController.createProfile);
route.put('/api/v1/profile/:profileId',profileController.updateProfile);
route.get('/api/v1/profile/:userId',profileController.fetchProfileByUserId); 

//Post
route.post('/api/v1/podt', postController.createPost);
route.delete('/api/v1/post/:postId', postController.deletePost);

//comment
route.post('/api/v1/comment', commentController.createComment);
route.delete('/api/v1/comment/:commentId', commentController.deleteCommnet);

//subject
route.post('/api/v1/subject',subjectController.addSubject); // remove after create the project
route.post('/api/v1/subject/user',subjectController.addSubjectByUserId) // remove after the project
route.get('/api/v1/subject/:userId/:year',subjectController.fetchSubjectByUserIdAndYear);
route.put('/api/v1/subject/result/:id',subjectController.addSubjectResult);
route.get('/api/v1/user/subject/:year',subjectController.fetchStudentSubjectByStudentNoAndYear)

export default route;