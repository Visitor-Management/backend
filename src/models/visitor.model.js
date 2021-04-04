const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

const visitorSchema = new Schema({
  profilePicPath: {
    type: String,
  },
  idCardImagePath: {
    type: String,
  },
  signaturePath: {
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
  vehicleno: {
    type: String,
  },
  belongings: {
    type: String,
  },
  idtype: {
    type: String,
  },
  checkOutBy: {
    type: String,
  },
  intime: {
    type: String,
  },
  outime: {
    type: String,
  },
})

const visitorModel = model('Visitor', visitorSchema)

module.exports = visitorModel
