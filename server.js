require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

/* app.use((req, res) => {
    console.log(req ); // this is what you want           
  
    res.on("finish", () => {
  
      console.log(res);
  
    });
  
  });
 */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//api routes
app.use('/users', require('./users/users.controller'));
app.use('/calls', require('./calls/calls.controller'));


// global error handler
app.use(errorHandler);


app.use(express.static('./dist/scoringApp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/scoringApp/'}),
);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});