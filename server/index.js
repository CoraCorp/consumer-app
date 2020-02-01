require('dotenv').config();
const express = require('express');
const cors = require('cors');

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://gravaddress-consumer-app.firebaseio.com'
});

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const idToken = req.headers.authorization.split(' ')[1];
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function(decodedToken) {
      console.log(decodedToken);
      let uid = decodedToken.uid;
      // ...
    })
    .catch(function(error) {
      console.log(error);
      // Handle error
    });
  res.send('Hello, World');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
