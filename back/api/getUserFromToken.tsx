import express from "express";
import {Client} from "../models/clientModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const router = express.Router();

router.post('/', (req: Request, res: any) => {
    // @ts-ignore
        const {token} = req.body;
    // @ts-ignore
        let user = jwt.verify(token, process.env.TOKEN_SECRET);
    // @ts-ignore
        const login = user.login;
    if (user) {
        Client.findOne({login: login}, async (err?: any, user?: any) => {
            if (err) {
                res.status(500).send('Server error');
            } else if (!user) {
                res.status(400).send('User with this username does not exist');
            } else {
                res.status(200).send({user: user})
            }
        })
    }
})

export default router;