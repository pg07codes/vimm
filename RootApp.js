/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

//requiring files here
const express = require("express")
const path = require("path")
const app = express()
const http=require('http').Server(app)
const io=require("socket.io")(http)
require("./sockets/socketIO")(io)


//serving files and parsing request body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//main route
app.get("/", (r, s) => {
    s.sendFile(path.join(__dirname,"/index.html"))
})


//server starts listening
http.listen(8888, () =>
    console.log("up at http://localhost:8888")
)