const AuthDataModel = require('../models/authDataModel');
const authService = require('../services/auth-service');

module.exports = (app) => {

  /**
   * Sign In
   */
  app.post('/api/sign-in', (req, res) => {
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
  app.post('/api/sign-up', (req, res) => {
    const { body: { name, password } } = req;
    const data = new AuthDataModel({ name, password });
    data.save()
      .then(saved => res.status(200).json({saved: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Update User
   */
  app.post('/api/user', (req, res) => {
    const { body: { name, password, oldPassword } } = req;
    authService.resetPassword({ name, password, oldPassword })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  /**
   * Remove User
   */
  app.post('/api/remove-user', (req, res) => {
    const { body: { name, password } } = req;
    AuthDataModel.findOneAndRemove({ name, password })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}
