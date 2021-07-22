require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const jwt = require('jsonwebtoken');

const config = require('config.json');
const path = require('path')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);
 
  req.body.userId=0;
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(' ')[1],decoded;
    
    try {
      decoded = jwt.verify(authorization, config.secret);
      console.error(decoded);
      var userId = decoded.sub;
      req.body.userId = userId;
      console.error(userId);
    } catch (e) {
      console.error(e)
    }finally{
      //next()
    }
  }
  
  next();

});
//api routes
app.use('/users', require('./users/users.controller'));
app.use('/calls', require('./calls/calls.controller'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// global error handler
app.use(errorHandler);


app.use(express.static('./dist/scoringApp'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/scoringApp/' }),
);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});