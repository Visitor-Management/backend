const mongoose = require('mongoose')
const { model, Schema, Document } = mongoose

const inviteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  tomeet: {
    type: String,
  },
  purpose: {
    type: String,
  },
  email: {
    type: String,
  },
  scheduletime: {
    type: String,
  },
})

const inviteModel = model('Invite', inviteSchema)

module.exports = inviteModel
