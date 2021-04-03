const { model, Schema, Document } = require('mongoose')

const checkInPointSchema = new Schema({
    checkinpoint: {
        type: String,
    },
    device: {
        type: String,
    },
    sitename: {
        type: String,
    },
})

const checkInPointModel = model('CheckInPoint', checkInPointSchema)

module.exports = checkInPointModel
