/* eslint-disable */
// tiene que ser sin ES6, si no no funciona
const proxy = require('cors-anywhere');

const host = 'localhost';
const port = 4000;

proxy
  .createServer({
    // Si se deja vacio se permite cualquiera
    originWhitelist: [], 
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () { console.log('Server CORS: ' + host + ':' + port) });