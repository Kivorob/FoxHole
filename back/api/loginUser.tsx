import express from "express";
import {Client} from "../models/clientModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config()

const router = express.Router()

router.post('/', async (req, res) => {
    const {login, password} = req.body;
    Client.findOne({login: login}, async (err?: any, user?: any) => {
            if (err) {
                res.status(500).send('Server is dead :(');
            } else if (!user) {
                res.status(400).send('User is not found :(');
            } else {
                const auth = await bcrypt.compare(password, user.hashedPassword)
                if (auth) {
                    const secret = process.env.TOKEN_SECRET;
                    const payload = {login};
                    // @ts-ignore
                    const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
                    res.cookie('jwt', token, {'httpOnly': false}).status(200).json({'token': token, 'user': user})
                } else {
                    res.status(400).send('Wrong password')
                }
            }
        }
    )
})

export default router;