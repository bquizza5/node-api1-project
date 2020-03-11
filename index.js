const express = require("express");
const server = express();

server.use(express.json());

let userCount = 4
let users = {
    1: {name : 'testing1', bio: 'testing1 bio'},
    2: {name : 'testing2', bio: 'testing2 bio'},
    3: {name : 'testing3', bio: 'testing3 bio'},

}
server.get('/users', (req, res) => {
    res.status(200).send(JSON.stringify(users))
})

server.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(JSON.stringify(users[id]))
})

server.post('/create', (req, res) => {
    const user = req.body
    console.log(req.body)
    users[userCount] = user
    userCount++
    
    res.status(201).json(users)
})

server.delete("/delete/:id", (req, res) => {
    let id = req.params.id
    delete users[id];
    res.status(202).json(users)
})

server.put('/update/:id', (req, res) => {
    let id = req.params.id
    const user = req.body
    console.log(req.body)
    users[id] = user
    
    res.status(201).json(users)
})

server.listen(4000, () => {
    console.log('server is running')
})
