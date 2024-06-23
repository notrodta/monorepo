// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import express from 'express';
// import * as path from 'path';
// import http from 'http';
// import httpProxy from 'http-proxy'

// // const app = express();

// // app.use('/assets', express.static(path.join(__dirname, 'assets')));

// // app.get('/api', (req, res) => {
// //   res.send({ message: 'Welcome to my-express-api!' });
// // });

// // const port = process.env.PORT || 3333;
// // const server = app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}/api`);
// // });
// // server.on('error', console.error);

// //
// // Create a proxy server with latency
// //
// var proxy = httpProxy.createProxyServer();
 
// //
// // Create your server that makes an operation that waits a while
// // and then proxies the request
// //
// http.createServer(function (req, res) {
//   // This simulates an operation that takes 500ms to execute
//   setTimeout(function () {
//     proxy.web(req, res, {
//       target: 'http://localhost:9008'
//     });
//   }, 1000);
// }).listen(8008);
 
// //

// // Create your target server
// //
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
//   res.write('request successfully proxied to: ' + '9008' + '...3');
//   res.end();
// }).listen(9008);


import { proxyServer } from 'proxy-server-tod';

proxyServer();