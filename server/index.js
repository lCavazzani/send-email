/* eslint-disable prefer-destructuring */
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);
// or const authRoutes = require('./routes.authRoutes') and than assign authRoutes(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT);
