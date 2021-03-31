const express = require('express');
const router = express.Router()

router.post(`/product/accountDetail/register`, (req, res) => {
    res.send('Hello')
})

// router.get(`/product`, (req, res) => {
//     res.send('Hello')
// })

router.post(`/product/login`, (req, res) => {
    res.send('Hello')
})

module.exports = router