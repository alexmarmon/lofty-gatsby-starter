const path = require('path');
const chokidar = require('chokidar');
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const execa = require('execa')

// get port
const port = parseInt(process.env.PORT);

// create express instance
const app = express();

// Use router for API calls
app.use('/api', function(req, res, next) {
  require(path.resolve('api/router'))(req, res, next);
});

// listen for changes to files in /api/
const watcher = chokidar.watch(path.resolve('./api/'));
watcher.on('ready', function() {
  watcher.on('all', function() {
    // clear require cache and re require new files after change
    console.log("Updated backend");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]api[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// use body parser for api requests
app.use(bodyParser.json());

// start server
app.listen(port + 30);

// start Gatsby
execa.shell(`gatsby develop --port ${port}`).stdout.pipe(process.stdout);

// export app
module.exports = app;
