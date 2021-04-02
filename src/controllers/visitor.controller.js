const inviteModel = require('../models/invite.model')
const visitorModel = require('../models/visitor.model')
const isEmpty = require('../utils/isEmpty')

module.exports = {
  checkIn: (req, res, next) => {
    const visitor = req.body
    visitor.profilepic =
      req.files['profilepic'] && req.files['profilepic'][0].path
    visitor.idcard = req.files['idcard'] && req.files['idcard'][0].path
    visitor.signature = req.files['signature'] && req.files['signature'][0].path
    console.log(visitor)
    const createdVisitor = visitorModel.create(visitor)
    return res.send(createdVisitor)
  },
  getVisitors: async (req, res, next) => {
    const { page, count, visitor, purpose, site } = req.query
    const data = await visitorModel.find({}).sort({ _id: -1 })
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
  checkOut: (req, res, next) => {
    const { checkin_id, user } = req.body
    const update = { checkOutBy: user }
    visitorModel.findByIdAndUpdate(checkin_id, update)
    res.send({ checkOut: 'Success' })
  },
  getPurpose: async (req, res, next) => {
    const visitorPurpose = await visitorModel.distinct('purpose')
    const invitePurpose = await inviteModel.distinct('purpose')
    const purposeArr = [...visitorPurpose, invitePurpose].flat()
    res.send({ data: purposeArr, totalCount: purposeArr.length })
  },
}
