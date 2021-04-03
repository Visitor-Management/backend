const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const employeeModel = require('../models/employee.model')
const isEmpty = require('../utils/isEmpty')
const employeeController = require('../controllers/employee.controller')

// Check In (Create Employee)
router.post(
  '/product/employee/register',
  // authMiddleware,
  // imageUploads,
  employeeController.employee,
)
router.get(
  '/product/employee/data',
  // authMiddleware,
  employeeController.getEmployees,
)

module.exports = router
