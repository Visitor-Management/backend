const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.model.js')
const validator = require('validator')
const bcrypt = require('bcrypt')
const logger = require('../utils/logger')
const createToken = require('../utils/createToken')
const createCookie = require('../utils/createCookie')
const isEmpty = require('../utils/isEmpty')

router.post(`/product/accountDetail/register`, async (req, res, next) => {
  const userData = req.body
  try {
    if (isEmpty(userData)) throw new Error("You're not userData")
    const findUser = await UserModel.findOne({ username: userData.username })
    if (findUser)
      throw new Error(`You're username ${userData.username} already exists`)

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const createUserData = await UserModel.create({
      ...userData,
      password: hashedPassword,
    })
    res.status(201).json({ data: createUserData, message: 'signup' })
  } catch (error) {
    next(error)
  }
})

// router.get(`/product`, (req, res) => {
//     res.send('Hello')
// })

router.post(`/product/login`, async (req, res, next) => {
  const userData = req.body
  try {
    if (isEmpty(userData)) throw new Error("You're not userData")

    const findUser = await UserModel.findOne({ username: userData.username })
    if (!findUser)
      throw new Error(`You're username ${userData.username} not found`)

    const isPasswordMatching = await bcrypt.compare(
      userData.password,
      findUser.password,
    )
    if (!isPasswordMatching) throw new Error("You're password not matching")

    const token = createToken(findUser)
    // const cookie = createCookie(tokenData)

    // res.setHeader('Set-Cookie', [cookie])

    res.status(200).json({ ...token, userType: 'Admin', name: findUser.name })
  } catch (error) {
    next(error)
  }
})

module.exports = router
