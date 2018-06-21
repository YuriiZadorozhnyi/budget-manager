const TransactionDataModel = require('../models/transactionDataModel');
const TransactionCategories = require('../models/transactionCategories');

module.exports = function (app) {

  /**
   * Add transaction
   */
  app.put('/api/transaction', function (req, res) {
    const data = new TransactionDataModel({
      id: req.body.id,
      author: req.body.author,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price
    });

    data.save()
      .then(saved => res.status(200).json({saved: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Get transaction
   */
  app.post('/api/transaction', function (req, res) {
    TransactionDataModel.find(req.body, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });

  });

  /**
   * Remove transaction
   */
  app.delete('/api/transaction/:id', function (req, res) {
    TransactionDataModel.findOneAndRemove({ id: req.params.id })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  /**
   * Get transaction CATEGORIES
   */
  app.post('/api/transaction-category', function (req, res) {
    TransactionCategories.find(req.body, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });

  });  

  /**
   * Add transaction CATEGORY
   */
  app.put('/api/transaction-category', function (req, res) {
    const data = new TransactionCategories({
      id: req.body.id,
      author: req.body.author,
      type: req.body.type,
      name: req.body.name
    });

    data.save()
      .then(saved => res.status(200).json(saved))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Remove transaction CATEGORY
   */
  app.delete('/api/transaction-category/:id', function (req, res) {
    TransactionCategories.findOneAndRemove({ id: req.params.id })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}
