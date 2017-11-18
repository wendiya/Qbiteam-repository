const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile('/client/index.html');
});

app.post('/enter', function(req, res) {
    var counter = 0;
    fs.readFile("users.json", "utf8", function(error,data){
        if(error) throw error;
        var parseData = JSON.parse(data);
        parseData.forEach(element => {
            if(element.mail === req.body.mail && element.pass === req.body.pass) {
                counter = 1;
            }
        });
        if (counter == 1) {
            fs.readFile("client/menu.html", "utf8", function(error,data){
                if(error) throw error;
                res.send(data);
            })
        } else {
            res.send('err');
        }
    })
});
app.post('/reg', function(req, res) {
    var counter = 0;
    fs.readFile("users.json", "utf8", function(error,data){
        if(error) throw error;
        if (data != '') {
            var parseData = JSON.parse(data);
            parseData.forEach(element => {
                if(element.mail === req.body.mail) {
                    counter = 1;
                }
            });
            if (counter === 1) {
                res.send('err');
            } else {
                parseData.push(req.body);
                var jsonData = JSON.stringify(parseData, null, 2);
                fs.writeFile('users.json', jsonData, function(error) {
                    if(error) throw error;
                });
                res.send('ok');
            }
        } else {
            var arrTemp = [];
            arrTemp.push(req.body);
            var jsonData = JSON.stringify(arrTemp, null, 2);
            fs.writeFile('users.json', jsonData, function(error) {
                if(error) throw error;
            });
            res.send('ok');
        }
    });
});

app.listen(3000, function() {
    console.log('app listening on 3000 port');
});