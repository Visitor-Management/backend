const deviceModel = require('../models/device.model')

module.exports = {
  device: (req, res, next) => {
    const device = req.body
    const createdDevice = deviceModel.create(device)
    return res.send(createdDevice)
  },
  getDevices: async (req, res, next) => {
    const { page, count, device } = req.query
    const data = await deviceModel.find({}).sort({ _id: -1 })
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
