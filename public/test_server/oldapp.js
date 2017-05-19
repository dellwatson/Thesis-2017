var http = require('http');
var fs = require('fs');
/*
.on('data', function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk);
})
fs.unlink('writeMe.txt');
*/

var http = require('http');

var server = http.createServer(function(req,res){
  console.log('request was made: '+ req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact-us'){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/dell'){
    var dell = [{name : 'watson', age :29},{name:'dale',age: 32}];
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(dell));
  }else {
    res.writeHead(404,{'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }


});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

//
// res.writeHead(200,{'Content-Type': 'application/json'});
// var myObj = {
//   name: 'Ryu',
//   job: 'Ninja',
//   age:29
// };
//
// res.end(JSON.stringify(myObj));


// *was inside server
// var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
// // var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');
// myReadStream.pipe(res);
// // res.end('Hey ninjas');
