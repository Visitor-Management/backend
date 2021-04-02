const inviteModel = require('../models/invite.model')
const isEmpty = require('../utils/isEmpty')

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
      let ans = data
        .slice(skip, skip + c)
        .filter(el => el.name.toLowerCase().startsWith(visitor.toLowerCase()))
      if (!isEmpty(purpose)) {
        ans = ans.filter(el => el.purpose === purpose)
      }
      return ans
    }
    const filteredData = filter(data)
    res.send({
      totalCount: data.length,
      data: filteredData,
    })
  },
}
