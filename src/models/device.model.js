const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

const deviceSchema = new Schema({
    devicename: {
        type: String,
        required: true,
    },
    iosversion: {
        type: String,
    },
    appversion: {
        type: String,
    },
    checkinpoint: {
        type: String,
    },
    email: {
        type: String,
    },
    udid: {
        type: String,
    },
})

const deviceModel = model('Device', deviceSchema)

module.exports = deviceModel
