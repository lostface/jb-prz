const
  express = require('express'),
  app = express(),
  prezisApp = require('./app/prezis.app');

app.set('port', (process.env.PORT || 3000));

app.use(function(req, res, next) {
  // TODO refine origin when frontend deployed too
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send('Hello There');
});

app.use('/prezis', prezisApp);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
