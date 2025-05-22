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
        },
      },
    });
  },

  createCustomer: async (customerData) => {
    return await customerModel.create({
      data: customerData,
    });
  },
};
