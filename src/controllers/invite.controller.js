const inviteModel = require('../models/invite.model')

module.exports = {
  invite: (req, res, next) => {
    const invite = req.body
    const createdInvite = inviteModel.create(invite)
    return res.send(createdInvite)
  },
  getInvites: async (req, res, next) => {
    const { page, count, visitor, purpose, site } = req.query
    const data = await inviteModel.find({}).sort({ _id: -1 })
    const filter = data => {
      const p = parseInt(page)
      const c = parseInt(count)
      const skip = p * c
      return data
        .slice(skip, skip + c)
        .filter(el => el.name.toLowerCase().startsWith(visitor.toLowerCase()))
    }
    const filteredData = filter(data)
    res.send({
      totalCount: data.length,
      data: filteredData,
    })
  },
}
