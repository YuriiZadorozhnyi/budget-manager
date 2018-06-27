const AuthDataModel = require('../models/authDataModel');

module.exports = {

  resetPassword({ name, password, oldPassword }) {
    return AuthDataModel.findOne({ name })
      .then(user => {
        if (!user) {
          throw new Error('User not found !');
        }
        if (user.password !== oldPassword) {
          throw new Error('Wrong Password !');
        }
        return AuthDataModel.update({ name }, { name, password }, { upsert: true })
      })
  }

}
