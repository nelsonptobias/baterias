const User = require('../model/user')

const getUser = async (req, res) => {
  const filter = req.query ? req.query : ''

  try {
    const allUser = await User.find(filter)
    const users = allUser.map(function (user) {
      return user.toObject()
    })

    return res.send(
      users
    )
  } catch (error) {
    return res.send({
      erro: error.message
    })
  }
}

module.exports = {
  getUser
}
