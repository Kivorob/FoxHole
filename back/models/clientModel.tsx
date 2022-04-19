import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ClientSchema = new Schema ({
    login: {type: String, unique: true},
    telephone: String,
    hashedPassword: String,
    mail: {type: String, default: ""},
    regDate: {type: Date, default: Date.now}
})

export const Client = mongoose.model('client', ClientSchema);