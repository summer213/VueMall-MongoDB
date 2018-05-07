// let user = require('./User.js');

// console.log(`userName:${user.userName}`);
// console.log(`sayHello:${user.sayHello()}`);

// 创建一个server
let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');

let server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(util.inspect(url.parse("http://127.0.0.1:3000/index?id=129/#/")));
  var pathname = url.parse(req.url).pathname;
  console.log('filename:'+pathname);
  fs.readFile(pathname.substring(1),function(err, data) {
    if (err) {
      res.writeHead(404,{
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString());
    }
    res.end();
  });
});

server.listen(3000, '127.0.0.1', ()=>{
  console.log('服务器已经在http://127.0.0.1:3000运行')
})