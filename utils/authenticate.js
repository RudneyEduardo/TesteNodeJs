import jwt from 'jsonwebtoken';


/**
 * AuthenticateToken
 * * This Function takes the req, res and callback function
 * * It checks the Token and Authenticate it, and sets the user that is Authenticated
 */
export const authenticateToken = (req, res, next) => {    
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}