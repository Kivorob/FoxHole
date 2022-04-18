import express from "express"
import {User} from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const router = express.Router();

router.post('/', async (req, res) => {
    const {login, telephone, password} = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new User({login: login, telephone: telephone, hashedPassword: hashedPassword});
    user.save((err?:any) => {
        if (err) {
            console.log(err);
            res.status(500).send("Ошибка при регистрации, попробуйте ещё раз.")
        } else {
            const secret = process.env.TOKEN_SECRET;
            const payload = {login};
            // @ts-ignore
            const token = jwt.sign(payload, secret,{'expiresIn': '12h'});
            res.status(200).json({token, 'user': user});
        }
    });
});

export default router;