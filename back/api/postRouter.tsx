import express from "express";
import {Client} from "../models/clientModel";
import {Stuff} from "../models/stuffModel";

const router = express.Router();

router.get('/', (req, res) =>{
    Stuff.find({}, (err?: any, stuff?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "stuff": stuff})
        }
    })
});

router.get('/:id', (req, res) =>{
    Stuff.findOne({id: req.params.id}, (err?: any, stuff?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "stuff": stuff})
        }
    })
})

router.post('/', async (req, res) => {
    const num = await Stuff.find().count()
    const newStuff = new Stuff ({
        id: num + 1,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        isBrend: req.body.isBrend,
        isDiscount: req.body.isDiscount,
        isNastol: req.body.isNastol,
        isKomix: req.body.isKomix,
        isFigures: req.body.isFigures
    });
    newStuff.save(async (err?: any) => {
        if (err) {
            res.status(500).json({"success": false})
        } else {
            res.status(200).json({"success": true, "stuff": newStuff})
        }
    })
})

export default router

