const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile('/dist/index.html');
});
app.post('/auth', function(req, res) {
    console.log('auth');
    console.log(req.body);
    res.send(req.body);
})
app.post('/reg', function(req, res) {
    console.log('reg');
    console.log(req.body);
    res.send(req.body);
})

app.listen(3000, function() {
    console.log('app listening on 3000 port');
});