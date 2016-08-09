const
  express = require('express'),
  app = express(),
  prezisApp = require('./app/prezis.app');

app.use('/prezis', prezisApp);

app.listen(3000);
