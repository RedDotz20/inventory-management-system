import express, { Request, Response } from 'express';
import getUsersController from '../controllers/serviceController/getAllUsers';
import verifyAccessToken from '../middleware/authToken';
import loginController from '../services/login';
import logoutController from '../services/logout';
import authController from '../services/userAuthService';
// import verifyRefreshToken from '../tests/verifyRefreshToken';

const router = express.Router();

router.get('/getAllUsers', verifyAccessToken, getUsersController.getAllUsers);
router.post('/login', loginController.login);
router.post('/logout', logoutController.logout);
router.post('/register', authController.register);

//* protected routes
// router.get('/verifyToken', verifyRefreshToken);
router.get('/protected', verifyAccessToken, (req: Request, res: Response) => {
  res.send('You are authorized and authenticated');
});

export default router;
