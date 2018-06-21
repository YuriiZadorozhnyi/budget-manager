var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminPasswordSchema = new Schema({
    adminPassword: String,
    inUse: Boolean,
    userName: String
});

var adminPasswords = mongoose.model('adminPasswords', adminPasswordSchema);

module.exports = adminPasswords;