const User = require('../model/user')

const postUser = async (req, res) => {
  const { name, lastName, email, password } = req.body

  try {
    const user = new User({
      name,
      lastName,
      email,
      password
    })

    if (await user.checkEmail(email)) {
      return res.send({
        message: `email ${email} informado ja existente`
      })
    }

    await user.save()

    return res.send({
      message: 'ok',
      retorno: user
    })
  } catch (error) {
    return res.send({
      erro: error.message
    })
  }
}

module.exports = {
  postUser
}
