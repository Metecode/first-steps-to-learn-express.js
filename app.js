var express = require("express");
var app = express()
var bodyParser = require('body-parser')

var urlEncodedParser = bodyParser.urlencoded({extended:false})
app.get('/',function(request,response){
    response.send('merhaba')
})
app.get('/login',function(request,response){
    response.send('merhaba login')
})
app.get('/product',function(request,response){
    console.log('ID:' + request.query.id)
    console.log('Category ID :' + request.query.categoryid)
    response.send('merhaba product')
})
app.post('/product',urlEncodedParser,function(request,response){
    console.log(request.body.isim)
    response.send('post istegi alindi')
})
app.delete('/product',function(request,response){
    response.send('delete istegi alindi')
})
app.put('/product',function(request,response){
    response.send('put istegi guncellendi')
})
app.get('/*customer*',function(request,response){
    response.send('müşteriler alındı')
})
var server = app.listen(8080);