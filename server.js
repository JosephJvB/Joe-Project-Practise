// const path = require('path')

const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

// Malcom-in-the-Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
// app.set('views', path.join(__dirname, 'views')) //added this from an example
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routes)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
