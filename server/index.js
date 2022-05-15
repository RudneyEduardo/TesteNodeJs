import 'dotenv/config'
import express from 'express'

import jwt from 'jsonwebtoken';

import { authenticateToken } from '../middleware/authenticate.js'


const app = express()

app.use(express.json())

const posts = [
    {
        username:'kat',
        title:'post 1'
    },
    {
        username:'bet',
        title:'post 2'
    }
]


app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post =>  post.username === req.user.name))
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})




app.listen(3000)