const { model, Schema, Document } = require('mongoose')

const siteSchema = new Schema(
  {
    sitename: {
      type: String,
    },
    address: {
      type: String,
    },
    checkinpoint: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' },
  },
)

siteSchema.set('timestamps', true)

const siteModel = model('Site', siteSchema)

module.exports = siteModel
