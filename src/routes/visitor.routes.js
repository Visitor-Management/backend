const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const visitorModel = require('../models/visitor.model')
const isEmpty = require('../utils/isEmpty')
const visitorController = require('../controllers/visitor.controller')
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime')
const path = require('path')
const imageUploadMiddleware = require('../middlewares/imageUpload.middleware').imageUploadMiddleWare

const storage = multer.diskStorage({
  destination: path.join('uploads/'),
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(4, function (err, raw) {
      const mime_type = mime.getType(file.originalname)

      // throw away any extension if provided
      const nameSplit = file.originalname.split('.').slice(0, -1)
      //nameSplit.pop();

      // replace all white spaces with - for safe file name on different filesystem
      const name = nameSplit.join('.').replace(/\s/g, '-')
      cb(null, raw.toString('hex') + name + '.' + mime.getExtension(mime_type))
    })
  },
})

const upload = multer({ storage })

const fields = [
  { name: 'profilepic', maxCount: 1 },
  { name: 'idcard', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
]
// const imageUploads = upload.fields(fields)
const imageUploads = imageUploadMiddleware(fields)

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
router.get(
  '/product/reception/meeting/purpose/data',
  authMiddleware,
  visitorController.getPurpose,
)

module.exports = router
