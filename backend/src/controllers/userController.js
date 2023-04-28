import express from 'express';
import db from '../services/userServices.js';

const router = express.Router();

router.post('/create-user', async (req, res) => {
  const { name, email, password, typeUser } = req.body;

  if (!name || !email || !password || !typeUser) return res.status(400).json({ message: "Insira todos os dados" })

  await db.createUser(name, email, password, typeUser);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

router.put('/profile', async (req, res) => {
  try {
    const { name, email, password, typeUser } = req.body;
    const { idUserProfile } = req;

    await db.updateProfile(name, email, password, typeUser, idUserProfile);

    res.status(200).send({ message: "Dados atualizados com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: `Houve um erro. ${err}` });
  }
})

export default router;