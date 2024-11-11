const express = require("express");

// object that represent express application

const app = express()
// if you receive a request to homepage then render homepage !!

// app.get(path,code)

app.get("/",function(request, response, next){
   console.log("we received a get request for homepage")
   response.send("this is the homepage") 
})

// start listening for requests in port 3000

//app.listen(3000)
//app.removeListener(3000)

app.listen(3000, function(){console.log("server listenning on port 3000")})


// to test we use axios postman ...

// middleware functions app.get(path,function(req, res, next){}) ==> see documentation of Express version 4 

app.get("/about",function(req, res, next){
    res.send("we love code !")
})