

import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv/config"

const app = express()
app.use(cors({ exposedHeaders: "Authorization" }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const users = [{
    username: "nina", password: "$2a$10$vXduDKE6mvTK.gPWamMOtO9ej76mTdaOicqYyDUie/7LMkv/l8Vwe" //password123 10 rounds
}, {
    username: "user1", password: "$2a$10$vXduDKE6mvTK.gPWamMOtO9ej76mTdaOicqYyDUie/7LMkv/l8Vwe"
}]

app.post("/login", async (req, res) => {
    const {username, password} = req.body
    try{
        const user = await authenticateUser(username, password)
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.set("Authorization", `Bearer ${token}`).sendStatus(200);
    } catch (err){
        console.log(err)
        res.status(401).send({error: "Unauthorized"})
    }
})

app.get("/protected", requireAuth, (req, res) => {
    res.send({message: "Private data!"})
})

function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401).send({ error: "Unauthorized" })
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ error: "Unauthorized" })
      req.user = decoded
      next()
    })
  }
  

  async function authenticateUser(username, password) {
    const user = users.find(u => u.username === username)
    if (!user) throw new Error("Invalid credentials")
  
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) throw new Error("Invalid credentials")
  
    return { username: user.username }
  }


app.listen(3000)