const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const AuthDataModel = require('../models/authDataModel');

const authService = require('../services/auth-service');

// mongoose
const mongoose = require('mongoose');
const config = require('../config');  // TODO create test database and new config;
mongoose.connect(config.getDbConnectionString());

describe('resetPassword', () => {

  it('change password from 3333333333 to 2222222222', (done) => {
    const params = { name: 'Yurii Zadorozhnyi', password: '2222222222', oldPassword: '3333333333' };
    authService.resetPassword(params)
    .then((data) => {
      return AuthDataModel.findOne({ name: params.name })
    })
    .then((data) => {
      assert.equal(data.password, params.password);
      done()
    });
  });

  it('should throw error because wrong password', (done) => {
    authService.resetPassword({ name: 'Yurii Zadorozhnyi', password: '3333333333', oldPassword: 'wrong password' })
    .then((data) => {
      throw new Error();
      done();
    })
    .catch(err => {
      assert.equal(err, 'Error: Wrong Password !');
      done();
    });
  });

  it('should throw error because user not found', (done) => {
    authService.resetPassword({ name: 'wrong user name', password: '66666666666', oldPassword: '3333333333' })
    .then((data) => {
      throw new Error();
      done();
    })
    .catch(err => {
      assert.equal(err, 'Error: User not found !');
      done();
    });
  });

  it('shold throw error because wrong params', (done) => {
    authService.resetPassword({  })
    .then((data) => {
      throw new Error();
      done();
    })
    .catch(err => {
      assert.equal(err, 'Error: User not found !');
      done();
    });
  });

  it('change password from 2222222222 to 3333333333', (done) => {
    authService.resetPassword({ name: 'Yurii Zadorozhnyi', password: '3333333333', oldPassword: '2222222222' })
    .then((data) => {
      assert.equal(true, true);
      done()
    });
  });

})
