#!/usr/bin/env node
const http = require('http');
let app = require('./app');


let server = http.createServer(app);

server.on('error', error => {
  if (error.syscall !== 'listen') { throw error }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.listen(process.env.PORT || 3005, () => {
  console.log(`Listening on http://localhost:${process.env.PORT || 3005}`);
});
