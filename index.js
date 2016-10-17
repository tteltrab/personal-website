'use strict';

//////////////////////////////
// Requires
//////////////////////////////
const express = require('express');

const path = require('path');

const appEnv = require('./lib/env');
const renderer = require('./lib/render');

//////////////////////////////
// App Variables
//////////////////////////////
const app = express();

app.engine('html', renderer);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

//////////////////////////////
// Start the server
//////////////////////////////
app.listen(appEnv.port, () => {
  console.log(`Server starting on port ${appEnv.port}`); // eslint-disable-line no-console
});
