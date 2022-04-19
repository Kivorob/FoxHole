import express from "express";
import {Client} from "../models/clientModel";

const router = express.Router();

router.get('/', (req, res) => {
    Client.find({}, (err?: any, user?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "No users"})
        } else {
            res.status(200).json({"success": true, "message": "User list", "user": user})
        }
    })
});

router.get('/:tag' +
    '', (req, res) => {
    Client.findOne({login: req.params.login}, (err?: any, user?: any) => {
        if (err) {
            res.status(400).json({"success": false, "massage": "User not found.", "error": err})
        } else {
            res.status(200).json({"success": true, "message": "User found", "user": user})
        }
    })
})

export default router