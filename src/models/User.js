import { model, Schema, Document } from 'mongoose'
import { User } from '../interfaces/users.interface'


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Roles,
        default: Roles.BASIC,
    },
    userId: {
        type: Number,
        unique: true,
    },
})

const userModel = model('User', userSchema)

module.exports = userModel
