const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require('./libs/db')

const { bateriaRoutes } = require('./store/routes')

connection.db.connect()

app.use(bodyParser.json())

app.use('/bateria', bateriaRoutes)

app.listen(3000, function () {
  console.log('Api up on port 3000')
})

module.exports = {
  app
}
