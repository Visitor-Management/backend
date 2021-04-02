const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const visitorModel = require('../models/visitor.model')
const isEmpty = require('../utils/isEmpty')
const visitorController = require('../controllers/visitor.controller')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const fields = [
  { name: 'profilepic', maxCount: 1 },
  { name: 'idcard', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
]
const imageUploads = upload.fields(fields)

// Check In (Create Visitor)
router.post(
  '/product/reception/user/checkin',
  authMiddleware,
  imageUploads,
  visitorController.checkIn,
)
router.get(
  '/product/reception/checkin/user/data',
  authMiddleware,
  visitorController.getVisitors,
)
router.post(
  '/product/reception/user/checkout',
  authMiddleware,
  visitorController.checkOut,
)

module.exports = router
