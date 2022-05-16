import jwt from 'jsonwebtoken'
export const authController = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = { name: username, password: password}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
}