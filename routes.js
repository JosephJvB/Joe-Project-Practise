
const express = require('express')
const router = express.Router()
const data = require('./data')
// const fs = require('fs') wont need till read/writefile

// routes!!

router.get('/skateApp', (req, res) => {
  res.render('home', data)
})

router.get('/skateApp/spots/:id', (req, res) => {
  const id = Number(req.params.id)
  const thatSpot = data.spots.find((spot) => {
    return spot.id === id
  })
  res.render('spot', thatSpot)
})

router.get('/', (req, res) => {
  res.send('<a href="/skateApp">butts</a>')
})
module.exports = router
