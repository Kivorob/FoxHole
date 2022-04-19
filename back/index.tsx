import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from "./api/createUser"
import getUserFromToken from "./api/getUserFromToken";
import loginUser from "./api/loginUser";
import createUser from "./api/createUser";
import userRouter from "./api/getUser"
import searchRouter from "./api/searchRouter";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const port = '7010';

const url = process.env.MONGO_URI

// @ts-ignore
mongoose.connect(url).then(res => console.log("БД АРБАЙТАЕТ"))

app.use('/api/post', postRouter);
app.use('/api/verify', getUserFromToken);
app.use('/api/login', loginUser);
app.use('/api/registration', createUser);
app.use('/api/user', userRouter);
app.use('/api/search', searchRouter);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
