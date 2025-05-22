const router = require('express').Router();
const {
  searchCustomers,
  createOneCustomer,
} = require('../controllers/customersController.js');

router.get('/customers', searchCustomers);

router.post('/customer/new', createOneCustomer);

module.exports = router;
