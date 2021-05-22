const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model.js')

const authMiddleware = async (req, res, next) => {
  try {
    // const cookies = req.cookies
    const headers = req.headers
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const secret = process.env.JWT_SECRET
      const verificationResponse = jwt.verify(token, secret)
      const userId = verificationResponse._id
      const findUser = await userModel.findById(userId)

      if (findUser) {
        req.user = findUser
        next()
      } else {
        next('Wrong authentication token')
      }
    } else {
      next('Authentication token missing')
    }
  } catch (error) {
    next('Wrong authentication token')
  }
}

module.exports = authMiddleware
