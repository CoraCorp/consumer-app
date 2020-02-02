const express = require('express');
const cors = require('cors');
const router = require('./router');

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://gravaddress-consumer-app.firebaseio.com'
});

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

app.use('/api', router);

module.exports = app;
