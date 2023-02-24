import express from 'express';
import db from '../services/userServices.js';

const routes = express.Router();

routes.post('/', async (req, res) => {
  const { name, email, password, typeUser } = req.body;

  await db.createUser(name, email, password, typeUser);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

export default routes;