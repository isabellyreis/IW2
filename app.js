//Rotas
const express = require('express')
const app = express()

app.get("/", function(req,res){
    res.send("Minha primeira página no NodeJS")
})
app.get("/blog", function(req,res){ 
    res.send("Minha página blog")   
})
app.get("/sobre", function(req,res){
    res.send("Minha página sobre")
})

app.listen(8081, function(req,res) {
    console.log("servidor funcinando")

})