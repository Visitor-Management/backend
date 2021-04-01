const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

const visitorSchema = new Schema({
    profilepic: {
        type: String,
        // required: true,
        // unique: true,
    },
    idcard: {
        type: String,
    },
    signature: {
        type: String,
    },
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    tomeet: {
        type: String,
    },
    purpose: {
        type: String,
    },
    gender: {
        type: String,
    },
    visitorCount: {
        type: String,
    },
    company: {
        type: String,
    },
    country: {
        type: String,
    },
    organization: {
        type: String,
    },
    site: {
        type: String,
    },
    vehicleNo: {
        type: String,
    },
    belongings: {
        type: String,
    },
    idtype: {
        type: String,
    },
})

const visitorModel = model('Visitor', visitorSchema)

module.exports = visitorModel
