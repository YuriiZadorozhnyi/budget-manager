var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionCategoriesSchema = new Schema({
    id: Number,
    author: String,
    type: String,
    name: String
});

var TransactionCategories = mongoose.model('transactionCategories', transactionCategoriesSchema);

module.exports = TransactionCategories;
