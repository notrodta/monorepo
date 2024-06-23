import http from 'http';
import httpProxy from 'http-proxy';

export function proxyServer() {
  const mainPort = 8008;
  console.log(`main port: http://localhost:${mainPort}`);
  var proxy = httpProxy.createProxyServer();

  //
  // Create your server that makes an operation that waits a while
  // and then proxies the request
  //
  http
    .createServer(function (req, res) {
      // This simulates an operation that takes 500ms to execute
      setTimeout(function () {
        proxy.web(req, res, {
          target: 'http://localhost:9008',
        });
      }, 1000);
    })
    .listen(mainPort);

  //

  // Create your target server
  //
  http
    .createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      // res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
      res.write('request successfully proxied to: ' + '9008' + '...4');
      res.end();
    })
    .listen(9008);
}
