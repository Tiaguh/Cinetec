import express from "express";
import db from '../services/actorService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const results = await db.findActor();

        if (results === 0) {
            res.status(204).end();
        } else {
            res.status(200).json(results);
        }

    } catch (err) {
        res.status(500).json({ message: `Encontramos um erro: ${err}` });
    }
});

router.put('/update-actor', async (req, res) => {
    try {
        const { nameActor, gender, birthDay } = req.body;

        await db.updateActor(nameActor, gender, birthDay, idActor);

        res.status(200).send({ message: "Dados atualizados com sucesso" });
    } catch (err) {
        res.status(500).send({ message: `Erro ao atualizar. ${err}` });
    }
})

router.delete('/:idActor', async (req, res) => {

    try {
        const { idActor } = req.params.idActor

        await db.deleteActor(idActor);

        res.status(200).send({ message: "Ator deletado com sucesso!" })
    } catch (err) {
        res.status(500).send({ message: `Houve um erro: ${err}` })
    }
})

export default router