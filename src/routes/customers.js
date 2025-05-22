const router = require('express').Router();
const { searchCustomers } = require('../controllers/customersController.js');

router.get('/customers', searchCustomers);

module.exports = router;
