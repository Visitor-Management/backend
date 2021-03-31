import { model, Schema, Document } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
})

const userModel = model('User', userSchema)

module.exports = userModel
