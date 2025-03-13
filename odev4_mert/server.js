const config = require("./config/server.config");
const db = require("./db/db");
const express = require("express");
const router = require("./router/user.router")

const app = express();
app.use(express.json())
config.initialServerConfig()
const PORT = process.env.PORT
app.use (router)
app.use(express.json())
db.connectMongo().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server", PORT, "Portunda çalışıyor");
        
    })
}).catch((e)=>{
    console.log(e.message);
    
})