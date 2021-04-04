const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const employeeModel = require('../models/employee.model')
const isEmpty = require('../utils/isEmpty')
const employeeController = require('../controllers/employee.controller')
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime')
const path = require('path')

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

const fields = [{ name: 'emppic', maxCount: 1 }]
const imageUploads = upload.fields(fields)

// Check In (Create Employee)
router.post(
  '/product/employee/register',
  authMiddleware,
  imageUploads,
  employeeController.employee,
)
router.get(
  '/product/employee/data',
  authMiddleware,
  employeeController.getEmployees,
)

module.exports = router
