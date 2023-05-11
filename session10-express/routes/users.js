import express from "express"


export const router = express.Router()


router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send("Create User")
})

router.get('/:userId', (req, res) => {
    //req.params.userId
    res.send(`Get user with id: ${req.params.userId}`)
})

router.put('/:userId', (req, res) => {
    //req.params.userId
    res.send(`Update user with id: ${req.params.userId}`)
})

router.delete('/:userId', (req, res) => {
    //req.params.userId
    res.send(`Delete user with id: ${req.params.userId}`)
})