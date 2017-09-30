
const express = require('express')
const router = express.Router()
const data = require('./data')
//const fs = require('fs') wont need till read/writefile

//routes!!
router.get('/', (req, res) => {
  res.render('')
})

router.get('/skateApp', (req, res) => {
res.render('map', data)
})


module.exports = router
