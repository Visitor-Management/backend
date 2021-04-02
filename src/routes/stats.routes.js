const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const inviteModel = require('../models/invite.model')
const router = express.Router()
const UserModel = require('../models/user.model.js')
const visitorModel = require('../models/visitor.model')

router.get(`/product/stats/data`, authMiddleware, async (req, res, next) => {
  const data = {}
  data.in_office = 0
  data.invite_sent = (await inviteModel.countDocuments()) || 0
  data.total_visitor = (await visitorModel.countDocuments()) || 0
  data.visitors = (await visitorModel.find()) || 0
  data.checked_out = await visitorModel.countDocuments({
    checkOutBy: { $exists: true },
  })
  data.isLoading = false

  res.send({ data: data })
})

module.exports = router
