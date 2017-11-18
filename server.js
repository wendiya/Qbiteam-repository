const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);    

app.use(express.static('dist'));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile('/dist/index.html');
});
app.post('/auth', function(req, res) {
    res.send(req.body);
})
app.post('/reg', function(req, res) {
    var counter = 0;
    fs.readFile("data/users.json", "utf8", function(error,data){
        if(error) throw error;
        if (data != '') {
            var parseData = JSON.parse(data);
            parseData.forEach(element => {
                if(element.name === req.body.name) {
                    counter = 1;
                }
            });
            if (counter === 1) {
                res.send('err');
            } else {
                parseData.push(req.body);
                var jsonData = JSON.stringify(parseData, null, 2);
                fs.writeFile('data/users.json', jsonData, function(error) {
                    if(error) throw error;
                    res.send('ok');
                });
            }
        } else {
            var arrTemp = [];
            arrTemp.push(req.body);
            var jsonData = JSON.stringify(arrTemp, null, 2);
            fs.writeFile('data/users.json', jsonData, function(error) {
                if(error) throw error;
                res.send('ok');
            });
        }
    });
});


app.post('/game', function(req, res) {
    
})

io.on('connection', function(socket){
    console.log('a user connected');
    console.log(socket.id);
    io.clients((error, clients) => {
        if (error) throw error;
        console.log(clients);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
        console.log(socket.id);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});