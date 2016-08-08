var
  express = require('express'),
  app = express(),
  prezisRoutes = require('./app/prezis.routes.js');

app.use('/prezis', prezisRoutes);

app.listen(3000);
