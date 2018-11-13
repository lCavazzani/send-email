/* eslint-disable prefer-destructuring */
const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);
// or const authRoutes = require('./routes.authRoutes') and than assign authRoutes(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT);
