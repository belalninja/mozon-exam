const {
  getFilteredCustomers,
  createCustomer,
} = require('../models/customerModel');

module.exports = {
  searchCustomers: async (req, res) => {
    const searchQuery = req.query.search;
    const customers = await getFilteredCustomers(searchQuery);

    res.json(customers);
  },

  createOneCustomer: async (req, res) => {
    const { name, companyName, country, taxID, registrationID, phoneNumber } =
      req.body;

    const newCustomer = await createCustomer({
      name,
      companyName,
      country,
      taxID,
      registrationID,
      phoneNumber,
    });

    res.json(newCustomer);
  },
};
