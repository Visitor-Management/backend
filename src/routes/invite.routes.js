const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const inviteModel = require('../models/invite.model')
const isEmpty = require('../utils/isEmpty')
const inviteController = require('../controllers/invite.controller')

// Check In (Create Invite)
router.post(
  '/product/reception/user/invite',
  authMiddleware,
  imageUploads,
  inviteController.checkIn,
)
router.get(
  '/product/reception/invite/user/data',
  authMiddleware,
  inviteController.getInvites,
)

module.exports = router
