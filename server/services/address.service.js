const queries = require('../db/queries/address.queries');

module.exports = {
  getUserAddress: async userId => {
    const address = await queries.getAddress(userId);
    return address || {};
  },
  saveUserAddress: async (userId, address) => {
    const existingAddress = await queries.getAddress(userId);
    if (existingAddress) {
      return queries.updateAddress(userId, address);
    }

    return queries.createAddress(userId, address);
  },
};
