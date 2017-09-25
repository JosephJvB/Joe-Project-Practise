
const express = require('express')
const router = express.Router()
const data = require('./data')
//const fs = require('fs') wont need till read/writefile

//routes!!
router.get('/skateApp', (req, res) => {
res.render('skateApp', data)
})


module.exports = router
