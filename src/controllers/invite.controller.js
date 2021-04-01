const inviteModel = require('../models/invite.model')

module.exports = {
  checkIn: (req, res, next) => {
    const invite = req.body
    const createdInvite = inviteModel.create(invite)
  },
  getInvites: (req, res, next) => {},
}
