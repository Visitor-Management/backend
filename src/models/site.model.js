const { model, Schema, Document } = require('mongoose')

const siteSchema = new Schema({
    sitename: {
        type: String,
    },
    address: {
        type: String,
    },
    checkinpointt: {
        type: String,
    },
})

const siteModel = model('Site', siteSchema)

module.exports = siteModel
