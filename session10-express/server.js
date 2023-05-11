import express from "express"
import { router } from "./routes/users.js"

const app = express()
//if you wanna use a middleware ont the whole page
//define it at the very top of the code
app.use(logger)

app.use('/users', router)


app.get('/', (req, res)=>{

    //respond to this url request is to download current server.js file
    //res.download("server.js")

    //sending an Error
    //res.status(500).json({message : "Error"})

    //respond to this url request is to display message: Hi
    res.send("Hi, it's a message from a server.")
})

//middleware
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)