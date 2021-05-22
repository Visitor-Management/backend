const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

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
    status: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },

}, { timestamps: true, })

const userModel = model('User', userSchema)

module.exports = userModel
