import express from 'express'
import { getStudent } from '../services/students.mjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.mjs'

const router = express.Router();

router.post('/login', async (req, res) => {
    const existingStudent = await getStudent(req.body.nickname);

    if (!existingStudent){
        return res.status(401).send('Unauthorised!')
    }

    const token = jwt.sign({sub: existingStudent._id}, config.ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: "1h"
    })

    res.status(200).json({ accessToken: token })
})

export default router;