/* eslint-disable */
const cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
const host = 'localhost';
// Listen on a specific port via the PORT environment variable
const port = 3001;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });