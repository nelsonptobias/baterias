const { Router } = require('express')

const {
  postUser,
  getUser
} = require('./controller')

const bateriaRoutes = Router()

bateriaRoutes.post('/v1/user', postUser)
bateriaRoutes.get('/v1/user', getUser)

module.exports = {
  bateriaRoutes
}
