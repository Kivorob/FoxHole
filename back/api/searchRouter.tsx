import express from "express";
import {Stuff} from "../models/stuffModel"

const router = express.Router();

router.get('/', (req, res) => {
    const {search} = req.body
    Stuff.find({text: { $regex: req.query.search}}, (err?: any, stuff?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "Stuff not found."})
        } else {
            res.send(stuff)
        }
    })
})


export default router