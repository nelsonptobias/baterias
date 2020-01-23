const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
      delete ret.createdAt
      delete ret.updatedAt
    }
  }
})

User.methods.checkEmail = async function checkId (userEmail) {
  return this.model('User').findOne({
    email: userEmail
  })
}

module.exports = model('User', User)
