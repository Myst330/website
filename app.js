const express = require('express');
const app = express();
const path = require('path');
const req = require('express/lib/request');
const res = require('express/lib/response');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.get('/boi', (req,res) => res.render('boi'));

app.listen(9090, () => console.log('imagine not playing skyblock loaleaolsodlwaosdllasjgIHSOPASAH'));
