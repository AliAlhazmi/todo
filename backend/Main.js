const express = require('express');
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build','inex.html'));
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});













// let http = require('http');
// let fs = require('fs');
// //let url = require('url');

// http.createServer(function(req, res) {
//     fs.readFile('./todo list proj/todo-list/src/index.js', function(err, data) {
//     res.writeHead(200, {'content-Type':'text/hml'});
//     res.write(data);
//     res.end('i');
//     })
    
// }).listen(8080);


