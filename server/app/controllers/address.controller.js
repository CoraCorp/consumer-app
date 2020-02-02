module.exports = {
  putAddress: (req, res) => {
    console.log(req.params.userId);
    console.log(req.body);
    res.sendStatus(200);
  }
};
