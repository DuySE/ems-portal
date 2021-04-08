const express = require('express'),
  cors = require('cors'),
  mysql = require('mysql'),
  employeeRoutes = require('./routes/employee'),
  manageRoutes = require('./routes/manage'),
  config = require('./config'),
  app = express(),
  port = config.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', employeeRoutes);
app.use('/manage', manageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
