const addressService = require('../../services/address.service');

module.exports = {
  getAddress: async (req, res) => {
    if (req.params.userId.toLowerCase() !== req.user.uid.toLowerCase()) {
      res.sendStatus(400);
    } else {
      const address = await addressService.getUserAddress(req.params.userId);
      res.json(address);
    }
  },
  putAddress: async (req, res) => {
    if (req.params.userId.toLowerCase() !== req.user.uid.toLowerCase()) {
      res.sendStatus(400);
    } else {
      try {
        await addressService.saveUserAddress(req.params.userId, req.body);
        res.sendStatus(200);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
    }
  },
};
