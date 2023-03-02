import express from 'express';
import db from '../services/userServices.js';

const routes = express.Router();

routes.post('/createUser', async (req, res) => {
  const { name, email, password, typeUser } = req.body;

  if(!name || !email || !password || !typeUser) res.status(400).json({message: "Insira todos os dados"})

  await db.createUser(name, email, password, typeUser);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

export default routes;