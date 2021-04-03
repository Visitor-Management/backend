const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const checkInPointModel = require('../models/checkInPoint.model')
const isEmpty = require('../utils/isEmpty')
const checkInPointController = require('../controllers/checkInPoint.controller')

// Check In (Create CheckInPoint)
router.post(
  '/product/register/checkinpoint',
  // authMiddleware,
  // imageUploads,
  checkInPointController.checkInPoint,
)
router.get(
  '/product/checkinpoint/data',
  // authMiddleware,
  checkInPointController.getCheckInPoints,
)

module.exports = router
