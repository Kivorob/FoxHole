import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StuffSchema = new Schema ({
    id: Number,
    image: String,
    description: String,
    price: Number,
    isBrend: {type: Boolean, default: false},
    isDiscount: {type: Boolean, default: false},
    isNastol: {type: Boolean, default: false},
    isKomix: {type: Boolean, default: false},
    isFigures: {type: Boolean, default: false}
})

export const Stuff = mongoose.model('stuff', StuffSchema);