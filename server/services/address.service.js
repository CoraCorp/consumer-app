const queries = require('../db/queries/address.queries');

module.exports = {
  getUserAddress: async userId => {
    const address = await queries.getAddress(userId);
    return address || {};
  },
  saveUserAddress: async (userId, address) => {
    const existingAddress = await queries.getAddress(userId);
    if (existingAddress) {
      const addressResult = queries.updateAddress(userId, address);
      // TODO: kick off subscriber update
      return addressResult;
    }

    return queries.createAddress(userId, address);
  },
};
