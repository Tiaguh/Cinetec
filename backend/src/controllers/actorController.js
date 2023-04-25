import express from "express";
import db from '../services/actorService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const results = await db.findActor();

        if(results === 0){
            res.status(204).end();
        } else {
            res.status(200).json(results);
        }

    } catch (err) {
        res.status(500).json({ message: `Encontramos um erro: ${err}`});
    }
});

export default router