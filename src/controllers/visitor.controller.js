const visitorModel = require('../models/visitor.model')

module.exports = {
  checkIn: (req, res, next) => {
    console.log(req.files)
    console.log(req.body)
    const visitor = req.body
    const createdVisitor = visitorModel.create(visitor)
  },
  getVisitors: (req, res, next) => {
    console.log(req.query)
    res.send('Getting Data')
  },
}
