
const express = require('express')
const router = express.Router()
const data = require('./data') //gonna remove this once i get database set up

// const db = require('/db') << DATABASE STUFF

// routes!!

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/spots/:id', (req, res) => {
  const id = Number(req.params.id)
  const thatSpot = data.spots.find((spot) => {
    return spot.id === id
  })
  res.render('spot', thatSpot)
})

module.exports = router
