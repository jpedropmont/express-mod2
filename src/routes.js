import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'João Pedro',
    email: 'teste@gmail.com',
    password_hash: '123123123123',
  });
  return res.json(user);
});

export default routes;
