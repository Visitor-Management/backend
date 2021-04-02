const visitorModel = require('../models/visitor.model')

module.exports = {
  checkIn: (req, res, next) => {
    const visitor = req.body
    visitor.profilepic = req.files['profilepic'][0].path
    visitor.idcard = req.files['idcard'][0].path
    visitor.signature = req.files['signature'][0].path
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
  checkOut: (req, res, next) => {
    const { checkin_id, user } = req.body
    const update = { checkOutBy: user }
    visitorModel.findByIdAndUpdate(checkin_id, update)
    res.send({ checkOut: 'Success' })
  },
}
