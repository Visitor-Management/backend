const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const deviceModel = require('../models/device.model')
const isEmpty = require('../utils/isEmpty')
const deviceController = require('../controllers/device.controller')

// Check In (Create Device)
router.post(
  '/product/acountDetail/device/register',
  // authMiddleware,
  // imageUploads,
  deviceController.device,
)
router.get(
  '/product/device/data',
  // authMiddleware,
  deviceController.getDevices,
)

module.exports = router
