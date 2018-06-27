const TransactionDataModel = require('../models/transactionDataModel');
const TransactionCategories = require('../models/transactionCategories');

module.exports = app => {

  /**
   * Add transaction
   */
  app.put('/api/transaction', (req, res) => {
    const { body: { id, author, title, description, category, price } } = req;
    const data = new TransactionDataModel({ id, author, title, description, category, price });
    data.save()
      .then(saved => res.status(200).json({saved: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Get transaction
   */
  app.post('/api/transaction', (req, res) => {
    TransactionDataModel.find(req.body, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });

  });

  /**
   * Remove transaction
   */
  app.delete('/api/transaction/:id', (req, res) => {
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
  app.post('/api/transaction-category', (req, res) => {
    TransactionCategories.find(req.body, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });

  });  

  /**
   * Add transaction CATEGORY
   */
  app.put('/api/transaction-category', (req, res) => {
    const { body: { id, author, type, name } } = req;
    const data = new TransactionCategories({ id, author, type, name });
    data.save()
      .then(saved => res.status(200).json(saved))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  });

  /**
   * Remove transaction CATEGORY
   */
  app.delete('/api/transaction-category/:id', (req, res) => {
    TransactionCategories.findOneAndRemove({ id: req.params.id })
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}
