var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transacrionSchema = new Schema({
      id: Number,
      author: String,
      title: String,
      description: String,
      type: String,
      category: String,
      price: Number
    });

var transacrions = mongoose.model('Transacrions', transacrionSchema);

module.exports = transacrions;
