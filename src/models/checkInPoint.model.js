const { model, Schema, Document } = require('mongoose')

const checkInPointSchema = new Schema({
    checkInPointname: {
        type: String,
    },
    device: {
        type: String,
    },
    checkinpointt: {
        type: String,
    },
})

const checkInPointModel = model('CheckInPoint', checkInPointSchema)

module.exports = checkInPointModel
