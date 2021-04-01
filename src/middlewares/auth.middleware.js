const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model.js')

const authMiddleware = async (
    req,
    res,
    next,
) => {
    try {
        // const cookies = req.cookies
        const headers = req.headers

        if (headers && headers.Authorization) {
            const secret = process.env.JWT_SECRET
            const verificationResponse = jwt.verify(
                headers.Authorization,
                secret,
            )
            const userId = verificationResponse._id
            const findUser = await userModel.findById(userId)

            if (findUser) {
                req.user = findUser
                next()
            } else {
                next(new Error('Wrong authentication token'))
            }
        } else {
            next(new Error('Authentication token missing'))
        }
    } catch (error) {
        next(new Error('Wrong authentication token'))
    }
}

module.exports = authMiddleware
