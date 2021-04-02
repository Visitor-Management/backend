const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const siteModel = require('../models/site.model')
const isEmpty = require('../utils/isEmpty')
const siteController = require('../controllers/site.controller')

// Check In (Create Site)
router.post(
  '/product/register/site',
  // authMiddleware,
  // imageUploads,
  siteController.site,
)
router.get(
  '/product/site/data',
  // authMiddleware,
  siteController.getSites,
)

module.exports = router
