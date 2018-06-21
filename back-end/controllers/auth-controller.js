const AuthDataModel = require('../models/authDataModel');

module.exports = function (app) {

  /**
   * Sign In
   */
  app.post('/api/sign-in', function (req, res) {
    AuthDataModel.find({ name: req.body.name })
      .then((auth) => {
        if (auth.length && req.body.password === auth[0].password) {
          res.status(200).json({authenticated: true});
        } else {
          res.status(200).json({authenticated: false});
        }
      })
      .catch(err => {
        res.status(400).json({error: 'Something went wrong !!!'});
      });
  });

  /**
   * Sign Up
   */
  app.post('/api/sign-up', function (req, res) {
    const data = new AuthDataModel({
      name: req.body.name,
      password: req.body.password
    });
    data.save()
      .then(saved => res.status(200).json({saved: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Update User
   */
  app.post('/api/user', function (req, res) {
    AuthDataModel.find({ name: req.body.name })
      .then(user => {
        if(user[0].password === req.body.oldPassword) {
          var userUpdate = {
            name: req.body.name,
            password: req.body.newPassword 
          };
          AuthDataModel.update({name: userUpdate.name}, userUpdate, { upsert: true })
          .then(resp => {
            res.status(200).json(resp);
          })
          .catch(err => {
            res.status(400).json(err);
          });
        } else {
          res.status(400).json({err: 'Wrong Password !'});
        }
      })
      .catch(err => {
        res.status(400).json({err: 'User Not Found !'});
      });
  });

  /**
   * Remove User
   */
  app.delete('/api/user', function (req, res) {
    AuthDataModel.findOneAndRemove({
        name: req.body.name,
        password: req.body.password
      })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}
