import express from 'express';
import db from '../services/loginServices.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) res.status(400).json({ message: "Insira todos os dados" })

  try {
    const users = await db.login(email, password);

    if (users.length > 0) {
      res.status(200).send({ message: 'Login efetuado com sucesso' });
    } else {
      res.status(401).send({ message: 'Login incorreto' });
    }
  } catch (error) {
    res.status(500).send({ message: `Houve um erro no banco de dados. ${error}` })
  }
});

export default router;