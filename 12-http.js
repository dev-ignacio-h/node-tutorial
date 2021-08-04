const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.end('Welcome to our home page');
    // res.end();
  } else if (req.url === '/about') {
    res.end('This is out short history');
    // res.end();
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `);
    // res.end();
  }
});

server.listen(5000);
