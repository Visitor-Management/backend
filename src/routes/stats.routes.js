const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const inviteModel = require('../models/invite.model')
const router = express.Router()
const UserModel = require('../models/user.model.js')
const visitorModel = require('../models/visitor.model')
const { subDays, addDays } = require('date-fns')

router.get(`/product/stats/data`, authMiddleware, async (req, res, next) => {
  const days = [
    new Date(subDays(new Date(), 0).setUTCHours(0, 0, 0, 0)).toISOString(),
    new Date(subDays(new Date(), 1).setUTCHours(0, 0, 0, 0)).toISOString(),
    new Date(subDays(new Date(), 2).setUTCHours(0, 0, 0, 0)).toISOString(),
    new Date(subDays(new Date(), 3).setUTCHours(0, 0, 0, 0)).toISOString(),
    new Date(subDays(new Date(), 4).setUTCHours(0, 0, 0, 0)).toISOString(),
  ]
  console.log(days.join('\n'))
  const visitorsByDay = []
  days.map(async (element, i) => {
    const docs = await visitorModel.countDocuments({
      intime: {
        $gte: element,
        $lt: addDays(new Date(element), 1).toISOString(),
      },
    })
    visitorsByDay[i] = docs
    console.log(element, '   ', addDays(new Date(element), 1))
  })
  const data = {}
  data.in_office = 0
  data.invite_sent = (await inviteModel.countDocuments()) || 0
  data.total_visitor = (await visitorModel.countDocuments()) || 0
  data.visitors = visitorsByDay
  data.checked_out = await visitorModel.countDocuments({
    checkOutBy: { $exists: true },
  })
  data.isLoading = false

  res.send({ data: data })
})

module.exports = router
