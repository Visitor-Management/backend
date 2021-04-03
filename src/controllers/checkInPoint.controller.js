const checkInPointModel = require('../models/checkInPoint.model')

module.exports = {
  checkInPoint: (req, res, next) => {
    const checkInPoint = req.body
    const createdCheckInPoint = checkInPointModel.create(checkInPoint)
    return res.send(createdCheckInPoint)
  },
  getCheckInPoints: async (req, res, next) => {
    const { page, count, checkInPoint } = req.query
    const data = await checkInPointModel.find({}).sort({ _id: -1 })
    const filter = data => {
      const p = parseInt(page)
      const c = parseInt(count)
      const skip = p * c
      return data
        .slice(skip, skip + c)
    }
    const filteredData = filter(data)
    res.send({
      totalCount: data.length,
      data: filteredData,
    })
  },
}
