import { Router } from 'express';
import loginHandler from './loginHandler';
import signupHandler from './signupHandler';

const masterController = Router();

masterController.post('/api/login', (req, res, next) => {
  void loginHandler(req, res).catch(next);
});

masterController.post('/api/signup', (req, res, next) => {
  void signupHandler(req, res).catch(next);
});

export default masterController;
