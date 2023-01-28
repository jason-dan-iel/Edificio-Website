const jwt = require('jsonwebtoken')

const verify = (req, res, next)=>{
    const authToken = req.header('auth-token')
    if(!authToken) res.status(401).json({message: 'Access denied'})

    try{
        const verified = jwt.verify(authToken, process.env.TOKEN_SECRET)
        req.user = verified;
    }catch(error){
        res.send("Invalid token")
    }
}