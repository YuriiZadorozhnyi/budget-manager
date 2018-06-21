var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var authInfoSchema = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

var authInfo = mongoose.model('authInfo', authInfoSchema);

module.exports = authInfo;