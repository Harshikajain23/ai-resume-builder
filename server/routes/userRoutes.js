import express from 'express';
import { getUserByID, getUserResumes,  loginUser, regsiterUser } from '../Controllers/User.Controller.js';
import protect from '../middlewares/auth.Middleware.js';

const userRouter = express.Router();

userRouter.post('/register', regsiterUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserByID);
userRouter.get('/resumes', protect, getUserResumes)

export default userRouter;