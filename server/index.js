const createServer = require('./server')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const server = createServer(connection)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Are you feeling it now, Mr Krabs?', PORT)
})
