import express from "express"
import {router} from "./routes/users.js"

const app = express()
app.use("/users", router)

app.listen(8000)