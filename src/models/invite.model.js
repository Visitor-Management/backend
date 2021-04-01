const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

const inviteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
    },
    personToMeet: {
        type: String,
    },
    purpose: {
        type: String,
    },
    email: {
        type: String,
    },
    time: {
        type: String,
    },
})

const inviteModel = model('Invite', inviteSchema)

module.exports = inviteModel
