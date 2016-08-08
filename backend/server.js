var
  express = require('express'),
  app = express();

app.get('/', function(req, res) {
  res.send('Hello There!');
});

app.listen(3000);
