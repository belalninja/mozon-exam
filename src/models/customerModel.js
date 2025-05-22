const prismaClient = require('./prismaClient');
const customerModel = prismaClient.customer;

module.exports = {
  getFilteredCustomers: async (searchQuery) => {
    if (!searchQuery) {
      return await customerModel.findMany();
    }
    return await customerModel.findMany({
      where: {
        name: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
    });
  },

  createCustomer: async (customerData) => {
    console.log(customerData);

    return await customerModel.create({
      data: customerData,
    });
  },
};
