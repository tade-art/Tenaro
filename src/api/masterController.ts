import { Router } from 'express';
import createTask from './createTask';
import { deleteTask } from './deleteTask';
import getTasks from './getTasks';
import loginHandler from './loginHandler';
import signupHandler from './signupHandler';
import { updateTask } from './updateTask';

const masterController = Router();

//User Auth
masterController.post('/login', (req, res, next) => {
  void loginHandler(req, res).catch(next);
});

masterController.post('/signup', (req, res, next) => {
  void signupHandler(req, res).catch(next);
});

//Tasks
masterController.post('/tasks', (req, res, next) => {
  void createTask(req, res).catch(next);  
});

masterController.put('/tasks/:id', (req, res, next) => {
  void updateTask(req, res).catch(next);
});

masterController.get('/tasks/:id', getTasks);
masterController.delete('/tasks/:id', deleteTask);

export default masterController;
