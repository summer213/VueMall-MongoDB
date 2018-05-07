var https = require('https');
var util = require('util')

https.get('https://www.imooc.com/index/getstarlist',function(res) {
  let data = '';
  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on("end", function() {
    let result = JSON.parse(data);
    // console.log('result:' + util.inspect(result.data));
  })
})